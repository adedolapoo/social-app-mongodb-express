const UsersService = require('../services/users.service')
const CommentsService = require('../services/comments.service')

class UsersController {

    static usersService = new UsersService();
    static commentsService = new CommentsService();

    static async findAll(req, res) {
        try {
            const users = await this.usersService.findAll(req)
            res.status(200).json({
                success: true,
                users,
                message: 'Users retrieved'
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                error,
                message: error.message
            })
        }
    }

    static async create(req, res) {
        try {
            const user = await this.usersService.create(req)
            res.status(201).json({
                success: true,
                user,
                message: 'User created successfully'
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                error,
                message: error.message
            })
        }
    }

    static async find(req, res) {
        try {
            const user = await this.usersService.findById(req)
            res.status(200).json({
                success: true,
                user,
                message: 'User successfully'
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                error,
                message: error.message
            })
        }
    }

    static async update(req, res) {
        try {
            const user = await this.usersService.update(req)
            res.status(200).json({
                success: true,
                user,
                message: 'User updated successfully'
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                error,
                message: error.message
            })
        }
    }

    static async delete(req, res) {
        try {
            const user = await this.usersService.delete(req)
            res.status(200).json({
                success: true,
                user,
                message: 'User deleted successfully'
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                error,
                message: error.message
            })
        }
    }

    static async comments(req, res) {
        try {
            const user = await this.usersService.findById(req)

            if(!user) throw new Error('User not found');

            const comments = await this.commentsService.findForUser(user.id)

            res.status(200).json({
                success: true,
                comments,
                message: 'User comments successfully retrieved'
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                error,
                message: error.message
            })
        }
    }

}

module.exports = UsersController;
