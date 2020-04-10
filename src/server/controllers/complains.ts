import { Request, Response, response } from 'express';
import * as moment from 'moment';

const Complains = require('../models/Complains');
const User = require('../models/Police');

// Create Complains
export const handlePostComplains = async (req: Request, res: Response) => {
	const { carModelNumber, note, customerName, cutomerPhoneNumber } = req.body;
	const newPost = new Complains({
		car_model: carModelNumber,
	    notes: note.text,
		customer_name: customerName,
		customer_phone_number: cutomerPhoneNumber,
		created_at: moment().toISOString(),
	  });
	const response = await newPost.save();
	if(response){
		const freeCop = await User.findOneAndUpdate({ 'assignedCase' : {'$exists' : false}},{ $set: {assignedCase:newPost._id} });
		if(freeCop) {
			await Complains.findOneAndUpdate({ _id : newPost._id},{ $set: {assignedTo: freeCop._id} });
			return res.status(200).json("Complain Submitted Successfully. Police man is also assigned");
		}
		return res.status(200).json("Complain Submitted Successfully");
	}
}

// Fetch Complains
export const handleGetComplains = async (req: Request, res: Response) => {
	const complains = await Complains.find();
	if(complains){
		return res.json(complains);
	}
	return  res.status(400).json('Error getting complains');
}


export const handleGetFreeCops = async(req: Request, res: Response) => {
	const users = await User.find({'assignedCase' : {'$exists' : false}},{password:0,email:0});
		if (users.length) {
			return res.json(users);
		} else {
			return res.status(400).json('Complains Not Found')
		}
}

export const handleGetBusyCops = async (req: Request, res: Response) => {
	const users = await User.find({'assignedCase' : {'$exists' : true}},{password:0,email:0})
		if (users.length) {
			return res.json(users);
		} else {
			return res.status(400).json('Complains Not Found')
		}
}

// Update Complains Status
export const handleUpdateComplainsStatus = async (req: Request, res: Response) => {
	const { id, isCompleted } = req.body;
	console.log(id,isCompleted)
	if ( isCompleted === "undefined" ) {
		return res.status(400).json('incorrect form submission');
	}
	const complain = await Complains.findOneAndUpdate({ _id : id},{ $set: {is_completed:isCompleted} });
	if (complain) {
		const user = await User.findOneAndUpdate({ assignedCase : id},{ $unset: {assignedCase:1} });
		return res.status(200).json('Updated Successfully');
	  }
	 return res.status(400).json('Update unsucsessfull');
}

// Update Complains Status
export const handleAssignComplain = async (req: Request, res: Response) => {
	const unassignedComplain = await Complains.findOne({ is_completed : false,'assignedTo' : {'$exists' : false} });
	const freeCop = await User.findOne({ 'assignedCase' : {'$exists' : false}});
	if(!unassignedComplain) {
		return res.status(400).json('All complains are already assigned or resolved');
	}
	if (unassignedComplain && freeCop) {
			const resp1 = await User.findOneAndUpdate({ _id : freeCop._id},{ $set: {assignedCase:unassignedComplain._id} });
			const resp2 = await Complains.findOneAndUpdate({ _id : unassignedComplain._id},{ $set: {assignedTo: freeCop._id} });
			return res.status(200).json(`Assigned to cop ${resp1.name}`);
	}
	else {
		return res.status(400).json('None of the cop is available right now');
	}
};
