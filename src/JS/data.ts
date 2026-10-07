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


//Resources Page

//links
const rLinks = [
    {text:"IRS", link:"https://www.irs.gov/"},
    {text:"Indiana Department of Revenue", link:"https://www.in.gov/dor/"},
    {text:"Social Security Administration", link:"https://www.ssa.gov/"},
    {text:"IRA Tax Center", link:"https://irahelp.com/"},
    {text:"Weather Forecast", link:"https://www.wunderground.com/intellicast"},
];

// Appointments
const appointments = [
    "Any income statements such as W-2, 1099-G, or 1099-MISC",
    "Bank statements, 1099-INT or 1099-DIV or equivalent",
    "Student loan information (1098-E)",
    "Receipts appropriate to your business",
    "Social Security earnings (SSA-1099)",
    "Stock basis information when stocks are sold",
    "Real estate taxes",
    "County excise tax on car license plates",
    "Contributions to non-profit organizations",
    "Union Dues",
    "K1 (1041), K1 (1065) or K1 (1120S)"
]

//Tax Law Changes
const TLC = [
        {title:'Standard Mileage Rate(PDF)', link: 'https://img1.wsimg.com/blobby/go/2391276c-a5f2-4230-8016-3876b6403ec8/downloads/d11cf91b-6bb3-43bc-8970-e15256136ede/2023-12-14%20Standard%20Mileage%20Rate.pdf?ver=1738455011948'},
    {title:'1099-K Reporting Requirements Delayed (PDF)',link:  'https://img1.wsimg.com/blobby/go/2391276c-a5f2-4230-8016-3876b6403ec8/downloads/9000f506-06cf-43e1-843a-090347c4bb80/2023-11-22%201099-K%20Reporting%20Requirements%20Delay.pdf?ver=1738455011948'},
{title:'Employee Retention Credit Scams (PDF)',link:  'https://img1.wsimg.com/blobby/go/2391276c-a5f2-4230-8016-3876b6403ec8/downloads/06c0445f-e1db-47e9-af77-3387f44bd853/2023-06-02%20Employee%20Retention%20Credit%20Scams.pdf?ver=1738455011948'},
    {title:'Penalty Relief for 2020 and 2021 Tax Returns (PDF)',link:  'https://img1.wsimg.com/blobby/go/2391276c-a5f2-4230-8016-3876b6403ec8/downloads/75791219-26b4-47c2-95a5-2dd241cd6f61/2023-12-20%20Penalty%20Relief%20for%202020%20and%202021%20Ta.pdf?ver=1738455011948'},
        {title:'IRS Warns Individuals to Stay Clear of Shady Tax Preparers (PDF)',link:  'https://img1.wsimg.com/blobby/go/2391276c-a5f2-4230-8016-3876b6403ec8/downloads/a12252be-4d7d-4d04-85df-a90f831cbbe1/2023-03-29%20IRS%20Warns%20Individuals%20to%20Stay%20Clear.pdf?ver=1738455011948'},
            // {title:'Income Statement Verified by a CPA is not Substantiation (PDF)', link:  'https://img1.wsimg.com/blobby/go/2391276c-a5f2-4230-8016-3876b6403ec8/downloads/499f8e41-9ee9-4ae0-9b8c-574c4e188bad/2023-03-23%20Income%20Statement%20Verified%20by%20a%20CPA%20.pdf?ver=1738455011948'}
];







export {wws, feedback, values, STH, ITS, BTS, rLinks, appointments, TLC}