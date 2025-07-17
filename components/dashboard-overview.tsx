"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  AlertTriangle,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
} from "lucide-react"

export function DashboardOverview() {
  const metrics = [
    {
      title: "Saldo Atual",
      value: "R$ 125.430,50",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Receitas do Mês",
      value: "R$ 89.240,00",
      change: "+8.2%",
      trend: "up",
      icon: ArrowUpRight,
      color: "text-green-600",
    },
    {
      title: "Despesas do Mês",
      value: "R$ 67.890,30",
      change: "-3.1%",
      trend: "down",
      icon: ArrowDownRight,
      color: "text-red-600",
    },
    {
      title: "Lucro Líquido",
      value: "R$ 21.349,70",
      change: "+15.8%",
      trend: "up",
      icon: TrendingUp,
      color: "text-green-600",
    },
  ]

  const alerts = [
    {
      type: "warning",
      message: "5 contas a pagar vencem em 3 dias",
      amount: "R$ 12.450,00",
    },
    {
      type: "info",
      message: "Recebimento de cartão previsto para amanhã",
      amount: "R$ 8.230,50",
    },
    {
      type: "danger",
      message: "Conta Banco do Brasil com saldo baixo",
      amount: "R$ 1.200,00",
    },
  ]

  const recentTransactions = [
    {
      id: 1,
      type: "entrada",
      description: "Venda - Cliente ABC Ltda",
      amount: "R$ 5.430,00",
      date: "2024-01-15",
      category: "Vendas",
      status: "confirmado",
    },
    {
      id: 2,
      type: "saida",
      description: "Pagamento - Fornecedor XYZ",
      amount: "R$ 2.150,00",
      date: "2024-01-15",
      category: "Fornecedores",
      status: "pago",
    },
    {
      id: 3,
      type: "entrada",
      description: "Recebimento Cartão - Stone",
      amount: "R$ 3.280,50",
      date: "2024-01-14",
      category: "Cartão",
      status: "confirmado",
    },
    {
      id: 4,
      type: "saida",
      description: "Folha de Pagamento - Janeiro",
      amount: "R$ 18.500,00",
      date: "2024-01-14",
      category: "Pessoal",
      status: "processando",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Dashboard Financeiro</h2>
          <p className="text-gray-500">Visão geral do fluxo de caixa em tempo real</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline">
            <Calendar className="h-3 w-3 mr-1" />
            Janeiro 2024
          </Badge>
        </div>
      </div>

      {/* Métricas Principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">{metric.title}</CardTitle>
              <metric.icon className={`h-4 w-4 ${metric.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
              <div className="flex items-center text-xs text-gray-500 mt-1">
                {metric.trend === "up" ? (
                  <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
                )}
                <span className={metric.trend === "up" ? "text-green-600" : "text-red-600"}>{metric.change}</span>
                <span className="ml-1">vs mês anterior</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Alertas */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-orange-500 mr-2" />
              Alertas Importantes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {alerts.map((alert, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50">
                <div
                  className={`w-2 h-2 rounded-full mt-2 ${
                    alert.type === "warning" ? "bg-orange-500" : alert.type === "info" ? "bg-blue-500" : "bg-red-500"
                  }`}
                />
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{alert.message}</p>
                  <p className="text-sm font-semibold text-gray-700">{alert.amount}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Transações Recentes */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Transações Recentes</CardTitle>
            <CardDescription>Últimas movimentações financeiras</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-3 rounded-lg border">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        transaction.type === "entrada" ? "bg-green-500" : "bg-red-500"
                      }`}
                    />
                    <div>
                      <p className="font-medium text-gray-900">{transaction.description}</p>
                      <p className="text-sm text-gray-500">
                        {transaction.category} • {transaction.date}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p
                      className={`font-semibold ${transaction.type === "entrada" ? "text-green-600" : "text-red-600"}`}
                    >
                      {transaction.type === "entrada" ? "+" : "-"}
                      {transaction.amount}
                    </p>
                    <Badge
                      variant={
                        transaction.status === "confirmado"
                          ? "default"
                          : transaction.status === "pago"
                            ? "secondary"
                            : "outline"
                      }
                      className="text-xs"
                    >
                      {transaction.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Gráfico de Fluxo de Caixa */}
      <Card>
        <CardHeader>
          <CardTitle>Fluxo de Caixa - Últimos 30 dias</CardTitle>
          <CardDescription>Evolução das receitas e despesas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Gráfico de tendências seria renderizado aqui</p>
              <p className="text-sm text-gray-400">Integração com Chart.js ou D3.js</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
