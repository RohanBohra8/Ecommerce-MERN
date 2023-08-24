import slugify from "slugify";
import categoryModel from "../models/categoryModel.js";

//CREATE CATEGORY || POST
export const createCategoryController = async(req,res) => {
    try {
        const {name} = req.body;
        if(!name) {
            return res.status(401).send({ message:'Name is required' });
        }
        //checking if category exists ot not 
        const existingCategory = await categoryModel.findOne({name});
        if(existingCategory){
            return res.status(200).send({
                success:true,
                message:'Category already exists'
            })
        }
        //if doesnt exist then we make a new category
        const category = await new categoryModel({name, slug:slugify(name)}).save(); //now the document will be saved

        res.status(201).send({
            success:true,
            message:'New category created',
            category
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Error in category',
            error
        })
    }
};

//  UPDATE CATEGORY || PUT
export const updateCategoryController = async(req,res) => {
    try {
        const {name} = req.body;
        const {id} = req.params;
        const category = await categoryModel.findByIdAndUpdate(id,{name,slug:slugify(name)},{new:true}); //upadte me new ki property use krke upadte krna mendatory hai 
        res.status(200).send({
            success:true,
            messafe:'Category updated Successfully',
            category
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error while uploading category",
            error
        })
    }
}; 

//GET ALL CATEGORY || GET
export const categoryControlller = async(req,res) => {
    try{
        const categories = await categoryModel.find({});
        res.status(200).send({
            success:true,
            message:'All category list',
            categories,
        })
    } catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Error while geting all categories',
            error
        })
    }
};

//GET SINGLE CATEGORY || GET
export const singleCategoryController = async(req,res) => {
    try {
        
        const category = await categoryModel.findOne({slug:req.params.slug});
        res.status(200).send({
            success:true,
            message:'get single category succesfull',
            category
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Error while getting single category',
            error
        })
    }
};

//DELETE CATEGORY || DELETE
export const deleteCategoryController = async(req,res) => {
    try {
        const {id} = req.params;
        await categoryModel.findByIdAndDelete(id);
        res.status(200).send({
            success:true,
            message:'Category deleted successfully',
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Error while deleting a category',
            error
        })
    }
}; 