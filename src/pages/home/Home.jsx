import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover"
import { useEffect, useState } from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import "./Home.scss"
import {
  dataUser,
  renderIcon,
  salesData,
  sellersData,
  loginUser,
  dataUserSalles
} from "./components/mockData"
import PropTypes from "prop-types"
import HeaderSidbar from "../../components/headerSidbar/HeaderSidbar"

const loginUserSalles = {
  name: "Vendedor",
  email: "vendedor@email.com",
  avatar: "VD"
}

const Home = ({ userType, setUserType }) => {
  const [date, setDate] = useState({
    from: new Date(2023, 0, 20),
    to: new Date(2023, 0, 20)
  })

  useEffect(() => {
    if (userType) {
      setUserType(localStorage.getItem("userType"))
    }
  }, [setUserType, userType])

  console.log(userType)

  const validateUser = userType === "admin"

  return (
    <div className="home-page">
      <HeaderSidbar
        isPage="home"
        userData={validateUser ? loginUser : loginUserSalles}
      />
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2
            className="text-3xl font-bold tracking-tight"
            style={{ color: "#fff" }}
          >
            Dashboard
          </h2>
          <div className="flex items-center space-x-2">
            <div className="grid gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="date"
                    variant={"outline"}
                    className="w-[260px] justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date?.from ? (
                      date.to ? (
                        <>
                          {format(date.from, "LLL dd, y")} -{" "}
                          {format(date.to, "LLL dd, y")}
                        </>
                      ) : (
                        format(date.from, "LLL dd, y")
                      )
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="end">
                  <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={date?.from}
                    selected={date}
                    onSelect={setDate}
                    numberOfMonths={2}
                  />
                </PopoverContent>
              </Popover>
            </div>
            {validateUser && <Button>Download</Button>}
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {(validateUser ? dataUser : dataUserSalles).map((item, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {item.title}
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      {renderIcon(item.icon)}
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{item.value}</div>
                    <p className="text-xs text-muted-foreground">
                      {item.percentage}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>
                    {validateUser ? "Visão Geral" : "Suas vendas por ano"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <ResponsiveContainer width="100%" height={350}>
                    <BarChart data={salesData}>
                      <XAxis
                        dataKey="name"
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `R$${value}`}
                      />
                      <Bar
                        dataKey="total"
                        fill="currentColor"
                        radius={[4, 4, 0, 0]}
                        className="fill-primary"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              {validateUser && (
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Vendas Recentes</CardTitle>
                    <CardDescription>
                      Você fez 265 vendas neste mês.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      {sellersData.map((user, index) => (
                        <div key={index} className="flex items-center mb-4">
                          <Avatar className="h-9 w-9">
                            <AvatarImage src={user.avatarSrc} alt="Avatar" />
                            <AvatarFallback>{user.fallback}</AvatarFallback>
                          </Avatar>
                          <div className="ml-4 space-y-1">
                            <p className="text-sm font-medium leading-none">
                              {user.name}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {user.email}
                            </p>
                          </div>
                          <div className="ml-auto font-medium">
                            {user.amount}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

Home.propTypes = {
  userType: PropTypes.node,
  setUserType: PropTypes.node
}

export default Home
