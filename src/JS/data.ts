import exImg from "../assets/media/11.png"
import trImg from "../assets/media/10.png"
import coImg from "../assets/media/8.png"
//who we serve
const wws= [
    "First-time tax filers",
    "Individuals with W-2 or 1099 income",
    "Self-employed professionals",
    "Clients with back taxes from 2021 or earlier",
    "Retirees and fixed-income earners",
    "Individuals needing audit support or tax guidance"
]

const feedback = [
    {name: "Marcus T.", text:"Pride Tax Store got me my biggest refund ever, highly recommend!"},
    {name: "Sarah K.", text:"Finally, a tax company that explains everything clearly and saves me money!"},
    {name: "David R.", text:"As a freelancer, their expertise saved me thousands. Worth every penny!"},
    {name: "Lisa M.", text:"Stress-free taxes? Yes! The team handled my IRS notice in one call."}
]

const values =[
    {img: exImg, text:"Excellence"},
    {img: trImg, text:"TrustWorthy"},
    {img: coImg, text:"Convenient"},
]


//Services Page
//Individual Tax Services
const ITS= [
    {title:"Personal Tax Preparation and Filing", text:"Stress-free filing for W-2 employees, freelancers, retirees, and more."},
    {title:"Maximize Your Refund", text:"We find every deduction and credit you qualify for."},
    {title:"Tax Planning & Estimated Payments", text:"Avoid surprises—plan ahead for next year’s taxes."},
    {title:"IRS Audit & Notice Assistance", text:"Don’t panic, we’ll handle IRS letters and audits for you."},
]

//Business Tax Services
const BTS= [
    {title:"Small Business & Self-Employed Taxes", text:"LLCs, S-Corps, freelancers, and gig workers—we know your deductions!"},
    {title:"Payroll & Bookkeeping Support", text:"Keep your finances organized year-round."},
    {title:"Quarterly Tax Estimates", text:"Avoid penalties with accurate quarterly filings."}
]
//Specialty Tax Help
const STH= [
    {title:"Tax Debt Relief & IRS Negotiation", text:"Settle back taxes, set up payment plans, or negotiate penalties."},
    {title:"Estate & Inheritance Tax Filing", text:"Guidance for executors and beneficiaries."},
    {title:"Nonprofit & Real Estate Tax Services", text:"Specialized support for unique tax situations."},

]











export {wws, feedback, values, STH, ITS, BTS}