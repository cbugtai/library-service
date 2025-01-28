"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRecommendations = exports.returnBook = exports.borrowBook = exports.deleteBook = exports.updateBook = exports.addBook = exports.getAllBooks = void 0;
const bookService = __importStar(require("../services/bookService"));
const getAllBooks = (req, res) => {
    try {
        const books = bookService.getAllBooks();
        res.status(200).json({ message: "Books retrieved", data: books });
    }
    catch (error) {
        res.status(500).json({ message: "Error retrieving books" });
    }
};
exports.getAllBooks = getAllBooks;
const addBook = (req, res) => {
    try {
        const newBook = req.body;
        const createdBook = bookService.addBook(newBook);
        res.status(201).json({ message: "Book added", data: createdBook });
    }
    catch (error) {
        res.status(500).json({ message: "Error adding book" });
    }
};
exports.addBook = addBook;
const updateBook = (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const updatedBook = bookService.updateBook(id, updatedData);
        if (updatedBook) {
            res.status(200).json({
                message: "Book updated",
                data: updatedBook,
            });
        }
        else {
            res.status(404).json({ message: "Book not found" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Error updating book" });
    }
};
exports.updateBook = updateBook;
const deleteBook = (req, res) => {
    try {
        const { id } = req.params;
        const success = bookService.deleteBook(id);
        if (success) {
            res.status(200).json({ message: "Book deleted" });
        }
        else {
            res.status(404).json({ message: "Book not found" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Error deleting book" });
    }
};
exports.deleteBook = deleteBook;
const borrowBook = (req, res) => {
    try {
        const { id } = req.params;
        const borrowerId = req.body.borrowerId;
        const result = bookService.borrowBook(id, borrowerId);
        if (result) {
            res.status(200).json({ message: "Book borrowed", data: result });
        }
        else {
            res.status(404).json({
                message: "Book not found or already borrowed",
            });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Error borrowing book" });
    }
};
exports.borrowBook = borrowBook;
const returnBook = (req, res) => {
    try {
        const { id } = req.params;
        const result = bookService.returnBook(id);
        if (result) {
            res.status(200).json({ message: "Book returned" });
        }
        else {
            res.status(404).json({
                message: "Book not found or not currently borrowed",
            });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Error returning book" });
    }
};
exports.returnBook = returnBook;
const getRecommendations = (req, res) => {
    try {
        const recommendations = bookService.getRecommendations();
        res.status(200).json({
            message: "Recommendations retrieved",
            data: recommendations,
        });
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching recommendations" });
    }
};
exports.getRecommendations = getRecommendations;
