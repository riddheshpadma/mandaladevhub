import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/db';
import Lead from '../../../lib/modals/Lead';
import { validateLeadForm } from '@/utils/formValidation';

export async function POST(request: Request) {
  try {
    await dbConnect();

    const formData = await request.json();

    // Validate form data
    const validationErrors = validateLeadForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      return NextResponse.json(
        { success: false, errors: validationErrors },
        { status: 400 }
      );
    }

    // Check for duplicate submissions with more flexible criteria
    const existingLead = await Lead.findOne({ 
      $or: [
        { email: formData.email },
        { phone: formData.phone }
      ],
      source: 'gudi-padwa-offer' // Only check duplicates from this campaign
    });

    if (existingLead) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'We already have your submission. Our team will contact you soon.',
          existingLeadId: existingLead._id // Provide existing lead ID for reference
        },
        { status: 409 }
      );
    }

    // Create new lead with all required fields
    const newLead = await Lead.create({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      package: formData.package,
      message: formData.message,
      businessType: formData.businessType,
      project: formData.project,
      budget: formData.budget,
      timeline: formData.timeline,
      referral: formData.referral,
      agreeTerms: formData.agreeTerms,
      source: 'gudi-padwa-offer',
      status: 'new'
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your submission! Our team will contact you shortly.', 
        data: {
          id: newLead._id,
          name: newLead.name,
          email: newLead.email
        } 
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error submitting form:', error);
    
  }
}