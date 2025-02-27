"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookRoutes_1 = __importDefault(require("./routes/bookRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
/**
 * Mount the book routes on /api/v1/books
 */
app.use("/api/v1/books", bookRoutes_1.default);
/**
 * Default error handler for unmatched routes
 */
app.use((req, res) => {
    res.status(404).json({ message: "Endpoint not found" });
});
exports.default = app;
