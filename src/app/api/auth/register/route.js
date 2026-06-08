import { connectToDatabase } from '@/lib/db';
import bcrypt from 'bcrypt';

export async function POST(request) {
  try {
    const { name, email, password, phone, userType, address } = await request.json();

    const { db } = await connectToDatabase();

    // Check if user exists
    const existing = await db.collection('users').findOne({ email });
    if (existing) {
      return Response.json({ success: false, message: 'Email already registered' }, { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create base user object
    const user = {
      name,
      email,
      password: hashedPassword,
      phone,
      userType,
      role: userType,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // Add cleaner-specific fields
    if (userType === 'cleaner') {
      user.address = address;
      user.services = [];
      user.rating = 0;
      user.totalJobs = 0;
      user.isVerified = false;
      user.bio = '';
    }

    // Add customer-specific fields
    if (userType === 'customer') {
      user.address = address || '';
      user.bookings = [];
    }

    const result = await db.collection('users').insertOne(user);

    const { password: _, ...userWithoutPassword } = user;

    return Response.json({
      success: true,
      user: { ...userWithoutPassword, _id: result.insertedId }
    });

  } catch (error) {
    console.error('Register error:', error);
    return Response.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}