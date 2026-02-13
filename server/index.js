import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Basic Health Check
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'KRG Medifabb API is running' });
});

// Auth Routes (Mocks for now)
app.post('/api/auth/login', (req, res) => {
    const { email, password } = req.body;
    // Mock auth logic
    if (email && password) {
        res.json({
            success: true,
            user: { id: 'usr_123', email, name: 'Procurement Manager', role: 'hospital_admin' },
            token: 'mock_jwt_token_for_phase_3'
        });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

// Product Inventory (Mocks for now)
app.get('/api/inventory', (req, res) => {
    res.json([
        { id: 'sku_001', name: 'Universal Drape Pack', stock: 154, status: 'In Stock' },
        { id: 'sku_002', name: 'Reinforced Gown L', stock: 42, status: 'Low Stock' },
        { id: 'sku_003', name: 'Standard Mayo Cover', stock: 0, status: 'Out of Stock' }
    ]);
});

app.listen(PORT, () => {
    console.log(`🚀 KRG Backend running on http://localhost:${PORT}`);
});
