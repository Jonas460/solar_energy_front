const dataUser = [
  {
    title: "Receita total",
    value: "$45,231.89",
    percentage: "+20.1% em relação ao mês passado",
    icon: "icon-1"
  },
  {
    title: "Total de clientes",
    value: "+2350",
    percentage: "+180.1% em relação ao mês passado",
    icon: "icon-2"
  },
  {
    title: "Vendas",
    value: "+12,234",
    percentage: "+19% em relação ao mês passado",
    icon: "icon-3"
  },
  {
    title: "Novos clientes",
    value: "+573",
    percentage: "+20 em relação ao mês passado",
    icon: "icon-4"
  }
]

const dataUserSalles = [
  {
    title: "Suas vendas anual",
    value: "R$20.000,00",
    percentage: "+20.1% em relação ao ano passado",
    icon: "icon-1"
  },
  {
    title: "Seus clientes total",
    value: "+235",
    percentage: "+18% em relação ao ano passado",
    icon: "icon-2"
  },
  {
    title: "Vendas por período",
    value: "R$ 12.234,00",
    percentage: "+19% em relação ao mês passado",
    icon: "icon-3"
  },
  {
    title: "Novos clientes por período",
    value: "+12",
    percentage: "+2 em relação ao mês passado",
    icon: "icon-4"
  }
]

const loginUser = {
  name: "Admin",
  email: "admin@email.com",
  avatar: "AD"
}

const renderIcon = (icon) => {
  switch (icon) {
    case "icon-1":
      return (
        <>
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </>
      )
    case "icon-2":
      return (
        <>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </>
      )
    case "icon-3":
      return (
        <>
          <rect width="20" height="14" x="2" y="5" rx="2" />
          <path d="M2 10h20" />
        </>
      )
    case "icon-4":
      return (
        <>
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </>
      )
    default:
      return null
  }
}

const sellersData = [
  {
    avatarSrc: "/avatars/01.png",
    fallback: "OM",
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    amount: "+R$1,999.00"
  },
  {
    avatarSrc: "/avatars/02.png",
    fallback: "JL",
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    amount: "+R$39.00"
  },
  {
    avatarSrc: "/avatars/03.png",
    fallback: "IN",
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    amount: "+R$299.00"
  },
  {
    avatarSrc: "/avatars/04.png",
    fallback: "WK",
    name: "William Kim",
    email: "will@email.com",
    amount: "+R$99.00"
  },
  {
    avatarSrc: "/avatars/05.png",
    fallback: "SD",
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    amount: "+R$39.00"
  }
]

const salesData = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: "Aug",
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: "Oct",
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 5000) + 1000
  },
  {
    name: "Dec",
    total: Math.floor(Math.random() * 5000) + 1000
  }
]

export {
  dataUser,
  renderIcon,
  sellersData,
  salesData,
  loginUser,
  dataUserSalles
}
