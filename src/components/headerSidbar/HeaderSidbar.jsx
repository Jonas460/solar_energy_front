import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import LogoSidebar from "../../assets/logo-sidbar.svg"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb"
import PropTypes from "prop-types"

import "./HeaderSidbar.scss"
import { useNavigate } from "react-router-dom"

const HeaderSidbar = ({ userData, isPage }) => {
  const navigate = useNavigate()

  return (
    <div className="sidbar-component flex h-16 items-center px-4">
      <img src={LogoSidebar} alt="aaa" />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            {isPage === "home" ? (
              <BreadcrumbPage href="/home">Dashboard</BreadcrumbPage>
            ) : (
              <BreadcrumbLink href="/home">Dashboard</BreadcrumbLink>
            )}
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            {isPage === "customer-registration" ? (
              <BreadcrumbPage href="/customer-registration">
                Cadastro de Clientes
              </BreadcrumbPage>
            ) : (
              <BreadcrumbLink href="/customer-registration">
                Cadastro de Clientes
              </BreadcrumbLink>
            )}
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          <BreadcrumbItem>
            {isPage === "customers" ? (
              <BreadcrumbPage href="/customers">Clientes</BreadcrumbPage>
            ) : (
              <BreadcrumbLink href="/customers">Clientes</BreadcrumbLink>
            )}
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Popover>
        <PopoverTrigger asChild>
          <Button id="date" variant={"outline"}>
            <div className="flex h-16 items-center px-4">
              <Avatar className="h-9 w-9">
                <AvatarImage src="/avatars/01.png" alt="Avatar" />
                <AvatarFallback>{userData.avatar}</AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {userData.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {userData.email}
                </p>
              </div>
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-60" align="end">
          <div className="flex-1 ">
            <Button style={{ width: "100%" }} onClick={() => navigate("/")}>
              Sair
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

HeaderSidbar.propTypes = {
  userData: PropTypes.node,
  isPage: PropTypes.node
}

export default HeaderSidbar
