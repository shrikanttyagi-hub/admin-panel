"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const revenueData = [
  { month: "Jan", value: 200 },
  { month: "Feb", value: 300 },
  { month: "Mar", value: 250 },
  { month: "Apr", value: 400 },
  { month: "May", value: 350 },
];

const monthlyEarnings = [
  { name: "Week 1", value: 2000 },
  { name: "Week 2", value: 1600 },
  { name: "Week 3", value: 2200 },
  { name: "Week 4", value: 1800 },
];

const employeeSalary = [
  { name: "Jun", salary: 4000, expense: 1500 },
  { name: "Jul", salary: 5200, expense: 1800 },
  { name: "Aug", salary: 4600, expense: 2000 },
  { name: "Sep", salary: 4900, expense: 1600 },
];

const DashboardMain = () => {
  return (
    <main className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1 overflow-y-auto">
      {/* Welcome Banner */}
      <Card className="col-span-3 bg-gradient-to-r from-blue-50 to-indigo-100 rounded-2xl shadow-md flex justify-between items-center p-6">
        <div>
          <h2 className="text-xl font-semibold">Welcome back Natalia!</h2>
          <p className="text-gray-600">
            You have earned <span className="font-bold">54% more</span> than last month.
          </p>
          <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg shadow">
            Check
          </button>
        </div>
        {/* <img
          src="/assets/welcome-illustration.png"
          alt="Illustration"
          className="w-40"
        /> */}
      </Card>

      {/* Revenue Updates (Bar chart) */}
      <Card>
        <CardContent>
          <h3 className="text-lg font-semibold mb-4">Revenue Updates</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#3b82f6" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Revenue Pie Chart */}
      <Card>
        <CardContent>
          <h3 className="text-lg font-semibold mb-4">Revenue Overview</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={[
                  { name: "2022", value: 23450 },
                  { name: "2023", value: 23450 },
                ]}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#3b82f6"
                dataKey="value"
                label
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <p className="text-center font-bold mt-2">$500,458</p>
        </CardContent>
      </Card>

      {/* Monthly Earnings Line Chart */}
      <Card>
        <CardContent>
          <h3 className="text-lg font-semibold mb-4">Monthly Earnings</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={monthlyEarnings}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#10b981" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
          <p className="text-center font-bold mt-2">$6,820</p>
        </CardContent>
      </Card>

      {/* Employee Salary */}
      <Card className="col-span-2">
        <CardContent>
          <h3 className="text-lg font-semibold mb-4">Employee Salary</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={employeeSalary}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="salary" fill="#3b82f6" radius={[6, 6, 0, 0]} />
              <Bar dataKey="expense" fill="#f43f5e" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Recent Transactions */}
      <Card>
        <CardContent>
          <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
          <ul className="space-y-3">
            <li className="flex justify-between">
              <span>PayPal Transfer</span>
              <span className="text-green-500">+$6,235</span>
            </li>
            <li className="flex justify-between">
              <span>Wallet</span>
              <span className="text-green-500">+$345</span>
            </li>
            <li className="flex justify-between">
              <span>Credit Card</span>
              <span className="text-red-500">-$2,235</span>
            </li>
            <li className="flex justify-between">
              <span>Refund</span>
              <span className="text-red-500">-$32</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </main>
  );
};

export default DashboardMain;
