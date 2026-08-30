
import { NextResponse } from "next/server";


export async function GET() { 
    let data = await fetch('https://dummyjson.com/products?_limit=10');
    data= await data.json();
    return NextResponse.json({
        success: true,
        results: data
    })
}