const commentServices = require('../services/comments.service')

class CommentsController {
    static commentsService = new commentServices();

    static async findAll(req, res) {
        try {
            const comments = await this.commentsService.findAll(req)
            res.status(200).json({
                success: true,
                comments,
                message: 'Comments retrieved'
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
            const comment = await this.commentsService.create(req)
            res.status(200).json({
                success: true,
                comment,
                message: 'comment created successfully'
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
            const comment = await this.commentsService.findById(req)
            res.status(200).json({
                success: true,
                comment,
                message: 'comment successfully'
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                error,
                message: error.message
            })
        }
    }

    static async findForUser(req, res) {
        try {
            const comments = await this.commentsService.findForUser(req)
            res.status(200).json({
                success: true,
                comments,
                message: 'comment successfully'
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                error,
                message: error.message
            })
        }
    }

    static async stats(req, res) {
        try {
            const {hashtags, mentions} = await this.commentsService.stats(req)
            res.status(200).json({
                success: true,
                hashtags,
                mentions,
                message: 'Top 10 hashtags and mentions retrieved'
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
            const comment = await this.commentsService.update(req)
            res.status(200).json({
                success: true,
                comment,
                message: 'comment updated successfully'
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
            const comment = await this.commentsService.delete(req)
            res.status(200).json({
                success: true,
                comment,
                message: 'comment deleted successfully'
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

module.exports = CommentsController;
