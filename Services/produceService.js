const product = require('../Models/productSchema')
class productService {

    static async getProductsList(condition, limit, skip) {
        try {
            return product
                .find(condition)
                .sort({ createdAt: -1 })
                .limit(limit)
                .skip(skip)
        } catch (error) {
            console.log(error)
        }


    }
    static async createProduct(option) {
        try {
            const data = new product(option);
            return await data.save();
        } catch (error) {
            // console.log(error)
            return error;
        }
    }
    static async updateProduct(option, id) {
        return await product
            .findByIdAndUpdate(id, option, { new: true })
            .then((data) => {
                return data;
            })
            .catch((er) => {
                console.log(er)
            });
    }

    static async deleteProduct(_id) {
        return await product
            .findByIdAndDelete(_id)
            .then((data) => {
                return data;
            })
            .catch((er) => {
                throw new Error(er);
            });
    }
    static async getProductCount(condition) {

        try {
            const data = await product.find(condition);
            return data.length
        } catch (error) {
            console.log(error)
        }

    }
    static async getProductById(id) {
        try {
            return await product.findById(id)

        } catch (error) {
            console.log(error)
        }
    }

    static async getProductByEmail(email) {
        try {
            return await product.findOne({ email: email })
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports = productService;