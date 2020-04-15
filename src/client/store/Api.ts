const API_BASE_ADDRESS = 'https://stolen-car-app.herokuapp.com/api';

export default class Api {
   static getComplains() {
       const uri = API_BASE_ADDRESS + "/complains";
       return fetch(uri, {
           method: 'GET'
       });
   }

   static getCops() {
    const uri = API_BASE_ADDRESS + "/unassigned/police";
    return fetch(uri, {
        method: 'GET'
    });
}

static getBusyCops() {
    const uri = API_BASE_ADDRESS + "/assigned/police";
    return fetch(uri, {
        method: 'GET'
    });
}


static assignCops() {
    const uri = API_BASE_ADDRESS + "/police/assign/auto";
    return fetch(uri, {
        method: 'POST'
    });
}

   static postComplains(data: any) {
        const uri = API_BASE_ADDRESS + "/submit/complains";
        const body = {
            carModelNumber: data.carModelNumber,
            note: { text: data.note },
            cutomerPhoneNumber: data.customerPhoneNumber,
            customerName: data.customerName,
        };

        return fetch(uri, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        });
    }

    static changeComplainStatus(id: string, isCompleted: boolean) {
        const uri = API_BASE_ADDRESS + `/update/complain/${id}`;
        const body = {
            id: id,
            isCompleted: isCompleted,
        };

        return fetch(uri, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        });
    }

    static assignUnassignStatus(id: string, complainId: string | null) {
        const uri = API_BASE_ADDRESS + `/police/assign/${id}`;
        const body = {
            id: id,
            complainId: complainId,
        };

        return fetch(uri, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        });
    }
}