const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://root:myPassword123@cluster0.ozuzndq.mongodb.net/tapandtidy?retryWrites=true&w=majority';

async function test() {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    console.log('✅ Connected to MongoDB!');
    await client.close();
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

test();