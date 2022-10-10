const express = require("express");
const Employee = require("../models/employee.model");
const employeeCtrl = {};

employeeCtrl.getEmployees = async (req, res) =>{
  const employee = await Employee.find();
  res.json(employee);
}

employeeCtrl.createEmployee = async (req, res) =>{
  const employee = new Employee(req.body);
  await employee.save();
  res.json({status: "Employee Saved"});
}

employeeCtrl.getEmployee = async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  res.json(employee);
}

employeeCtrl.updateEmployee = async (req, res) => {
  const employee = {
    name: req.body.name,
    position: req.body.position,
    office: req.body.office,
    salary: req.body.salary
  };
  const {id} = req.params;
  await Employee.findByIdAndUpdate(id, {$set: employee}, {new: true});
  res.json({status:"Employee Updated"});
}

employeeCtrl.deleteEmployee = async (req, res) => {
  await Employee.findByIdAndRemove(req.params.id);
  res.json({status: "Employee Deleted"});
}

module.exports = employeeCtrl;