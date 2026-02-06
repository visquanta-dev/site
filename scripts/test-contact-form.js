
const axios = require('axios');

async function testContactForm() {
    console.log('--- TESTING CONTACT FORM API ---');

    // Note: Since this is is an API route in Next.js, we need the server running.
    // However, we can also test the logic if we were able to run it locally.
    // For now, I'll just provide the CURL equivalent or a script that would work if the dev server is on.

    const testData = {
        name: "Test User",
        email: "test@example.com",
        phone: "555-0199",
        dealership: "Test Motors",
        inquiryType: "Schedule a Demo",
        message: "This is a test message from the automated SEO audit and setup process."
    };

    console.log('Test Payload:', testData);
    console.log('\nTo test manually, run:');
    console.log(`curl -X POST http://localhost:3000/api/contact -H "Content-Type: application/json" -d '${JSON.stringify(testData)}'`);
}

testContactForm();
