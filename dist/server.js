/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/config/keys.ts":
/*!***********************************!*\
  !*** ./src/server/config/keys.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\r\n    mongoURI: \"mongodb://himanshu:bohemiaaka1@stolencar-shard-00-00-8s6qk.mongodb.net:27017,stolencar-shard-00-01-8s6qk.mongodb.net:27017,stolencar-shard-00-02-8s6qk.mongodb.net:27017/test?ssl=true&replicaSet=Stolencar-shard-0&authSource=admin&retryWrites=true&w=majority\",\r\n    secretOrKey: \"MyS3cr3tK3Y\"\r\n};\r\n\n\n//# sourceURL=webpack:///./src/server/config/keys.ts?");

/***/ }),

/***/ "./src/server/controllers/auth.ts":
/*!****************************************!*\
  !*** ./src/server/controllers/auth.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar bcrypt = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\r\nvar jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\r\nvar passport = __webpack_require__(/*! passport */ \"passport\");\r\nvar User = __webpack_require__(/*! ../models/Police */ \"./src/server/models/Police.js\");\r\nvar keys = __webpack_require__(/*! ../config/keys */ \"./src/server/config/keys.ts\");\r\n// User Register\r\nexports.handleRegister = function (req, res) {\r\n    var _a = req.body, email = _a.email, name = _a.name, password = _a.password;\r\n    console.log(email, name, password);\r\n    User.findOne({ email: req.body.email }).then(function (user) {\r\n        if (user) {\r\n            //   errors.email = 'Email already exists';\r\n            return res.status(400).json('Email already exists');\r\n        }\r\n        else {\r\n            var newUser_1 = new User({\r\n                name: req.body.name,\r\n                email: req.body.email,\r\n                password: req.body.password\r\n            });\r\n            bcrypt.genSalt(10, function (err, salt) {\r\n                bcrypt.hash(newUser_1.password, salt, function (err, hash) {\r\n                    if (err)\r\n                        throw err;\r\n                    newUser_1.password = hash;\r\n                    newUser_1\r\n                        .save()\r\n                        .then(function (user) { return res.json(user); })\r\n                        .catch(function (err) { return console.log(err); });\r\n                });\r\n            });\r\n        }\r\n    });\r\n    // if ( !email || !name || !password ) {\r\n    // \treturn res.status(400).json('incorrect form submission');\r\n    // }\r\n    // // encrypt password\r\n    // const hash = bcrypt.hashSync(password, 10 , (err: any, hash: any) => { return hash });\r\n    // // Transactions allow correct recovery from failures\r\n    // db.transaction((trx: any) => {\r\n    // \ttrx.insert({\r\n    // \t\thash: hash,\r\n    // \t\temail: email,\r\n    // \t\tname: name\r\n    // \t})\r\n    // \t .into('users')\r\n    // \t .returning('*')\r\n    // \t .then((result: any) => {\r\n    // \t\treturn res.status(200).json(result);\r\n    // \t })\r\n    // \t // commit incase of success\r\n    // \t .then(trx.commit)\r\n    // \t // rollback incase of failure\r\n    // \t .catch((err: any) => {\r\n    // \t\t// console.log(\"err\", err);\r\n    // \t\ttrx.rollback;\r\n    // \t\tres.status(400).json('email already exists')\r\n    // \t })\r\n    // })\r\n    // .catch((err: any) => res.status(400).json('unable to register'))\r\n};\r\n// User Signin\r\nexports.handleSignin = function (req, res, bcrypt) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var _a, email, password;\r\n    return __generator(this, function (_b) {\r\n        _a = req.body, email = _a.email, password = _a.password;\r\n        if (!email || !password) {\r\n            return [2 /*return*/, res.status(400).json('incorrect form submission')];\r\n        }\r\n        // Find user by email\r\n        User.findOne({ email: email }).then(function (user) {\r\n            // Check for user\r\n            if (!user) {\r\n                //   errors.email = 'User not found';\r\n                return res.status(404).json('User not found');\r\n            }\r\n            // Check Password\r\n            bcrypt.compare(password, user.password).then(function (isMatch) {\r\n                if (isMatch) {\r\n                    // User Matched\r\n                    var payload = { id: user.id, name: user.name }; // Create JWT Payload\r\n                    // Sign Token\r\n                    jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, function (err, token) {\r\n                        res.json({\r\n                            success: true,\r\n                            token: 'Bearer ' + token\r\n                        });\r\n                    });\r\n                }\r\n                else {\r\n                    // errors.password = 'Password incorrect';\r\n                    return res.status(400).json('Password incorrect');\r\n                }\r\n            });\r\n        });\r\n        return [2 /*return*/];\r\n    });\r\n}); };\r\n// User Logout\r\nexports.handleLogout = function (req, res, db, bcrypt) {\r\n    var id = req.params.id;\r\n    if (!id) {\r\n        return res.status(400).json('incorrect form submission');\r\n    }\r\n    db('users').where({ id: id })\r\n        .update({\r\n        status: 'offline',\r\n    })\r\n        .returning('*')\r\n        .then(function (result) {\r\n        return res.status(200).json(result);\r\n    })\r\n        .catch(function (err) { return res.status(400).json('Unable to log out'); });\r\n};\r\n\n\n//# sourceURL=webpack:///./src/server/controllers/auth.ts?");

/***/ }),

/***/ "./src/server/controllers/complains.ts":
/*!*********************************************!*\
  !*** ./src/server/controllers/complains.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar moment = __webpack_require__(/*! moment */ \"moment\");\r\nvar Complains = __webpack_require__(/*! ../models/Complains */ \"./src/server/models/Complains.js\");\r\nvar User = __webpack_require__(/*! ../models/Police */ \"./src/server/models/Police.js\");\r\n// Create Complains\r\nexports.handlePostComplains = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var _a, carModelNumber, note, customerName, cutomerPhoneNumber, newPost, response, freeCop;\r\n    return __generator(this, function (_b) {\r\n        switch (_b.label) {\r\n            case 0:\r\n                _a = req.body, carModelNumber = _a.carModelNumber, note = _a.note, customerName = _a.customerName, cutomerPhoneNumber = _a.cutomerPhoneNumber;\r\n                newPost = new Complains({\r\n                    car_model: carModelNumber,\r\n                    notes: note.text,\r\n                    customer_name: customerName,\r\n                    customer_phone_number: cutomerPhoneNumber,\r\n                    created_at: moment().toISOString(),\r\n                });\r\n                return [4 /*yield*/, newPost.save()];\r\n            case 1:\r\n                response = _b.sent();\r\n                if (!response) return [3 /*break*/, 5];\r\n                return [4 /*yield*/, User.findOneAndUpdate({ 'assignedCase': { '$exists': false } }, { $set: { assignedCase: newPost._id } })];\r\n            case 2:\r\n                freeCop = _b.sent();\r\n                if (!freeCop) return [3 /*break*/, 4];\r\n                return [4 /*yield*/, Complains.findOneAndUpdate({ _id: newPost._id }, { $set: { assignedTo: freeCop._id } })];\r\n            case 3:\r\n                _b.sent();\r\n                return [2 /*return*/, res.status(200).json(\"Complain Submitted Successfully. Police man is also assigned\")];\r\n            case 4: return [2 /*return*/, res.status(200).json(\"Complain Submitted Successfully\")];\r\n            case 5: return [2 /*return*/];\r\n        }\r\n    });\r\n}); };\r\n// Fetch Complains\r\nexports.handleGetComplains = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var complains;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4 /*yield*/, Complains.find()];\r\n            case 1:\r\n                complains = _a.sent();\r\n                if (complains) {\r\n                    return [2 /*return*/, res.json(complains)];\r\n                }\r\n                return [2 /*return*/, res.status(400).json('Error getting complains')];\r\n        }\r\n    });\r\n}); };\r\nexports.handleGetFreeCops = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var users;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4 /*yield*/, User.find({ 'assignedCase': { '$exists': false } }, { password: 0, email: 0 })];\r\n            case 1:\r\n                users = _a.sent();\r\n                if (users.length) {\r\n                    return [2 /*return*/, res.json(users)];\r\n                }\r\n                else {\r\n                    return [2 /*return*/, res.status(400).json('Complains Not Found')];\r\n                }\r\n                return [2 /*return*/];\r\n        }\r\n    });\r\n}); };\r\nexports.handleGetBusyCops = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var users;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4 /*yield*/, User.find({ 'assignedCase': { '$exists': true } }, { password: 0, email: 0 })];\r\n            case 1:\r\n                users = _a.sent();\r\n                if (users.length) {\r\n                    return [2 /*return*/, res.json(users)];\r\n                }\r\n                else {\r\n                    return [2 /*return*/, res.status(400).json('Complains Not Found')];\r\n                }\r\n                return [2 /*return*/];\r\n        }\r\n    });\r\n}); };\r\n// Update Complains Status\r\nexports.handleUpdateComplainsStatus = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var _a, id, isCompleted, complain, user;\r\n    return __generator(this, function (_b) {\r\n        switch (_b.label) {\r\n            case 0:\r\n                _a = req.body, id = _a.id, isCompleted = _a.isCompleted;\r\n                console.log(id, isCompleted);\r\n                if (isCompleted === \"undefined\") {\r\n                    return [2 /*return*/, res.status(400).json('incorrect form submission')];\r\n                }\r\n                return [4 /*yield*/, Complains.findOneAndUpdate({ _id: id }, { $set: { is_completed: isCompleted } })];\r\n            case 1:\r\n                complain = _b.sent();\r\n                if (!complain) return [3 /*break*/, 3];\r\n                return [4 /*yield*/, User.findOneAndUpdate({ assignedCase: id }, { $unset: { assignedCase: 1 } })];\r\n            case 2:\r\n                user = _b.sent();\r\n                return [2 /*return*/, res.status(200).json('Updated Successfully')];\r\n            case 3: return [2 /*return*/, res.status(400).json('Update unsucsessfull')];\r\n        }\r\n    });\r\n}); };\r\n// Update Complains Status\r\nexports.handleAssignComplain = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var unassignedComplain, freeCop, resp1, resp2;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4 /*yield*/, Complains.findOne({ is_completed: false, 'assignedTo': { '$exists': false } })];\r\n            case 1:\r\n                unassignedComplain = _a.sent();\r\n                return [4 /*yield*/, User.findOne({ 'assignedCase': { '$exists': false } })];\r\n            case 2:\r\n                freeCop = _a.sent();\r\n                if (!unassignedComplain) {\r\n                    return [2 /*return*/, res.status(400).json('All complains are already assigned or resolved')];\r\n                }\r\n                if (!(unassignedComplain && freeCop)) return [3 /*break*/, 5];\r\n                return [4 /*yield*/, User.findOneAndUpdate({ _id: freeCop._id }, { $set: { assignedCase: unassignedComplain._id } })];\r\n            case 3:\r\n                resp1 = _a.sent();\r\n                return [4 /*yield*/, Complains.findOneAndUpdate({ _id: unassignedComplain._id }, { $set: { assignedTo: freeCop._id } })];\r\n            case 4:\r\n                resp2 = _a.sent();\r\n                return [2 /*return*/, res.status(200).json(\"Assigned to cop \" + resp1.name)];\r\n            case 5: return [2 /*return*/, res.status(400).json('None of the cop is available right now')];\r\n        }\r\n    });\r\n}); };\r\n\n\n//# sourceURL=webpack:///./src/server/controllers/complains.ts?");

/***/ }),

/***/ "./src/server/middleware/logger.ts":
/*!*****************************************!*\
  !*** ./src/server/middleware/logger.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar moment = __webpack_require__(/*! moment */ \"moment\");\r\nvar colors = __webpack_require__(/*! colors */ \"colors\");\r\nvar logger = function (req, res, next) {\r\n    console.log(colors.cyan(req.protocol + \"://\" + req.get('host') + req.originalUrl + \" : \" + moment().format()));\r\n    // http://localhost:5000/ :  2019-06-23T21:18:43+05:30\r\n    next();\r\n};\r\nexports.default = logger;\r\n\n\n//# sourceURL=webpack:///./src/server/middleware/logger.ts?");

/***/ }),

/***/ "./src/server/models/Complains.js":
/*!****************************************!*\
  !*** ./src/server/models/Complains.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nconst Schema = mongoose.Schema;\r\n\r\n// Create Schema\r\nconst ComplainSchema = new Schema({\r\n  notes: {\r\n    type: String,\r\n    required: true\r\n  },\r\n  car_model: {\r\n    type: String,\r\n    required: true\r\n  },\r\n  customer_name: {\r\n    type: String,\r\n    required: true\r\n\r\n  },\r\n  customer_phone_number: {\r\n    type: String,\r\n    required: true\r\n  },\r\n  assignedTo: {\r\n    type: String\r\n  },\r\n  is_completed: {\r\n    type: Boolean,\r\n    required: true,\r\n    default: false\r\n  },\r\n  created_at: {\r\n    type: Date,\r\n    required:true\r\n  },\r\n\r\n});\r\n\r\nmodule.exports = Complains = mongoose.model('complains', ComplainSchema);\r\n\r\n// const Complains = mongoose.model('complains', ComplainSchema);\r\n// module.exports { Complains };\n\n//# sourceURL=webpack:///./src/server/models/Complains.js?");

/***/ }),

/***/ "./src/server/models/Police.js":
/*!*************************************!*\
  !*** ./src/server/models/Police.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nconst Schema = mongoose.Schema;\r\n\r\n// Create Schema\r\nconst PoliceSchema = new Schema({\r\n  name: {\r\n    type: String,\r\n    required: true\r\n  },\r\n  email: {\r\n    type: String,\r\n    required: true\r\n  },\r\n  password: {\r\n    type: String,\r\n    required: true\r\n  },\r\n  date: {\r\n    type: Date,\r\n    default: Date.now\r\n  },\r\n  resolved: {\r\n    type: Array,\r\n    default: []\r\n  },\r\n  assignedCase: {\r\n    type: String\r\n  }\r\n});\r\n\r\nmodule.exports = Police = mongoose.model('police', PoliceSchema);\n\n//# sourceURL=webpack:///./src/server/models/Police.js?");

/***/ }),

/***/ "./src/server/routes.ts":
/*!******************************!*\
  !*** ./src/server/routes.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\r\nvar auth_1 = __webpack_require__(/*! ./controllers/auth */ \"./src/server/controllers/auth.ts\");\r\nvar complains_1 = __webpack_require__(/*! ./controllers/complains */ \"./src/server/controllers/complains.ts\");\r\nvar router = express.Router();\r\n// For Testing\r\nrouter.get('/hello', function (req, res, next) {\r\n    res.json('Hello World');\r\n    next();\r\n});\r\n// APIs\r\nrouter.post('/signin', function (req, res) { auth_1.handleSignin(req, res, bcrypt); });\r\nrouter.post('/register', function (req, res) { auth_1.handleRegister(req, res); });\r\nrouter.get('/complains', function (req, res) { complains_1.handleGetComplains(req, res); });\r\nrouter.get('/unassigned/police', function (req, res) { complains_1.handleGetFreeCops(req, res); });\r\nrouter.get('/assigned/police', function (req, res) { complains_1.handleGetBusyCops(req, res); });\r\nrouter.post('/submit/complains', function (req, res) { complains_1.handlePostComplains(req, res); });\r\nrouter.put('/update/complain/:id', function (req, res) { complains_1.handleUpdateComplainsStatus(req, res); });\r\nrouter.post('/police/assign/auto', function (req, res) { complains_1.handleAssignComplain(req, res); });\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./src/server/routes.ts?");

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\r\nvar cors = __webpack_require__(/*! cors */ \"cors\");\r\n// const mongoose = require('mongoose');\r\nvar routes_1 = __webpack_require__(/*! ./routes */ \"./src/server/routes.ts\");\r\nvar logger_1 = __webpack_require__(/*! ./middleware/logger */ \"./src/server/middleware/logger.ts\");\r\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nvar path = __webpack_require__(/*! path */ \"path\");\r\nvar db = __webpack_require__(/*! ./config/keys */ \"./src/server/config/keys.ts\").mongoURI;\r\nmongoose\r\n    .connect(db)\r\n    .then(function () { return console.log('MongoDB Connected'); })\r\n    .catch(function (err) { return console.log(err); });\r\nvar app = express();\r\n// Init middleware\r\napp.use(logger_1.default);\r\napp.use(cors());\r\n// body-parser (express middleware) that reads a form's input and stores it as a javascript object accessible through req.body\r\napp.use(bodyParser.json());\r\n// API Routes\r\napp.use('/api', routes_1.default);\r\n// Path used by client /*\r\napp.use(express.static(path.join(__dirname, '../public')));\r\napp.get('*', function (req, res) { return res.sendFile(path.join(__dirname, '../public/index.html')); });\r\nvar port = Number(process.env.PORT) || 8000;\r\napp.listen(port, function () { return console.log(\"Server listening on port: \" + port); });\r\n\n\n//# sourceURL=webpack:///./src/server/server.ts?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");\n\n//# sourceURL=webpack:///external_%22bcrypt%22?");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcryptjs\");\n\n//# sourceURL=webpack:///external_%22bcryptjs%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "colors":
/*!*************************!*\
  !*** external "colors" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"colors\");\n\n//# sourceURL=webpack:///external_%22colors%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"moment\");\n\n//# sourceURL=webpack:///external_%22moment%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n\n//# sourceURL=webpack:///external_%22passport%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });