// pages/benefits.js

const benefits = [
    {
        title: "Competitive Salary",
        description:
            "We know the problems we're tackling need all your brainpower, so we ensure financial worries are off the table. Expect a salary that's not just competitive but designed to let you thrive.",
        icon: "💰",
    },
    {
        title: "Unlimited PTO",
        description:
            "We believe in work-life balance. With us, unlimited PTO means you must take at least two weeks off every year, including one full week at a time. Relax, recharge, and come back inspired.",
        icon: "🌴",
    },
    {
        title: "Work from Anywhere",
        description:
            "Our team is spread across the globe, working asynchronously and independently. Whether you love the city buzz or the peace of the countryside, pick your perfect spot. We’re happy as long as you are.",
        icon: "🌍",
    },
    {
        title: "Stock Options",
        description:
            "As an early team member, you get to ride this exciting journey with us. Our stock options mean you’re not just working for us; you’re part of the ownership, sharing in our collective success.",
        icon: "📈",
    },
    {
        title: "First-Class Hardware",
        description:
            "We trust you to know what you need. Choose the best tools and hardware to help you shine. This is your company too, and we want you equipped for greatness.",
        icon: "💻",
    },
    {
        title: "Continuous Growth",
        description:
            "We’re all about learning and growing. Buy books, take courses, and build new skills. Your growth helps us grow, and we’re here to support your journey every step of the way.",
        icon: "📚",
    },
    {
        title: "Biannual Retreats",
        description:
            "We love getting together! Twice a year, we meet up to connect, align, and have some fun. It’s about building stronger bonds and enjoying some quality time as a team.",
        icon: "🌟",
    },
    {
        title: "Dental and Medical",
        description:
            "Your health is our priority. Wherever you are, enjoy almost full coverage with United Platinum. Rest easy knowing you’re well taken care of.",
        icon: "🩺",
    },
    {
        title: "DAO Distributed Model",
        description:
            "Join us not just as a team member, but as a co-owner through our unique DAO model. Wedi LLC is linked with WeDAO Co via a strategy fund, using a part of the app’s revenue as collateral through transactions on the DAO’s governance and treasury tokens. As an early investor or team member, you’ll have a spot on the LLC cap table and a share of minted DAO governance tokens. Built on realms.today using Solana, our DAO model integrates decentralized finance right into your benefits.",
        icon: "🔗",
    },
];

export default function Benefits() {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-6">
                {benefits.map((benefit, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-start"
                    >
                        <div className="text-4xl mb-4">{benefit.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                        <p className="text-gray-400">{benefit.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
