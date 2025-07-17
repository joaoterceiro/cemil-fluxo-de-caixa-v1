"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Crown, TrendingUp, TrendingDown, Target, AlertTriangle, CheckCircle, Building, Calendar } from "lucide-react"

export function ExecutiveDashboard() {
  const kpis = [
    {
      title: "Receita Anual",
      value: "R$ 2.450.000",
      target: "R$ 2.800.000",
      progress: 87.5,
      change: "+15.2%",
      trend: "up",
      status: "good",
    },
    {
      title: "EBITDA",
      value: "R$ 485.000",
      target: "R$ 560.000",
      progress: 86.6,
      change: "+12.8%",
      trend: "up",
      status: "good",
    },
    {
      title: "Margem Líquida",
      value: "19.8%",
      target: "20%",
      progress: 99,
      change: "+2.1%",
      trend: "up",
      status: "excellent",
    },
    {
      title: "ROI",
      value: "24.5%",
      target: "22%",
      progress: 111.4,
      change: "+3.8%",
      trend: "up",
      status: "excellent",
    },
  ]

  const alertasEstrategicos = [
    {
      tipo: "critical",
      titulo: "Meta de Receita Q1 em Risco",
      descricao: "Projeção indica 8% abaixo da meta trimestral",
      valor: "R$ 180.000",
      prazo: "15 dias",
    },
    {
      tipo: "warning",
      titulo: "Aumento de Custos Operacionais",
      descricao: "Custos subiram 12% vs mês anterior",
      valor: "R$ 45.000",
      prazo: "Imediato",
    },
    {
      tipo: "info",
      titulo: "Oportunidade de Investimento",
      descricao: "Excesso de caixa disponível para aplicação",
      valor: "R$ 250.000",
      prazo: "30 dias",
    },
  ]

  const projecoes = [
    {
      periodo: "Q1 2024",
      receita: "R$ 612.000",
      despesas: "R$ 485.000",
      lucro: "R$ 127.000",
      margem: "20.8%",
      status: "projetado",
    },
    {
      periodo: "Q2 2024",
      receita: "R$ 680.000",
      despesas: "R$ 520.000",
      lucro: "R$ 160.000",
      margem: "23.5%",
      status: "projetado",
    },
    {
      periodo: "Q3 2024",
      receita: "R$ 720.000",
      despesas: "R$ 550.000",
      lucro: "R$ 170.000",
      margem: "23.6%",
      status: "projetado",
    },
    {
      periodo: "Q4 2024",
      receita: "R$ 788.000",
      despesas: "R$ 590.000",
      lucro: "R$ 198.000",
      margem: "25.1%",
      status: "projetado",
    },
  ]

  const analiseCompetitiva = [
    {
      metrica: "Margem de Lucro",
      empresa: "19.8%",
      mercado: "16.2%",
      posicao: "Acima",
      diferenca: "+3.6%",
    },
    {
      metrica: "ROI",
      empresa: "24.5%",
      mercado: "18.9%",
      posicao: "Acima",
      diferenca: "+5.6%",
    },
    {
      metrica: "Crescimento Anual",
      empresa: "15.2%",
      mercado: "12.8%",
      posicao: "Acima",
      diferenca: "+2.4%",
    },
    {
      metrica: "Eficiência Operacional",
      empresa: "87%",
      mercado: "82%",
      posicao: "Acima",
      diferenca: "+5%",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center">
            <Crown className="h-8 w-8 mr-3 text-yellow-600" />
            Dashboard Executivo
          </h2>
          <p className="text-gray-500">Visão estratégica e indicadores de alta gestão</p>
        </div>
        <div className="flex items-center space-x-2 mt-3 md:mt-0">
          <Badge variant="outline" className="text-green-600 border-green-600">
            <CheckCircle className="h-3 w-3 mr-1" />
            Dados Atualizados
          </Badge>
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Relatório Mensal
          </Button>
        </div>
      </div>

      {/* KPIs Principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, index) => (
          <Card key={index} className="relative overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600">{kpi.title}</CardTitle>
                <div className={`p-1 rounded-full ${kpi.status === "excellent" ? "bg-green-100" : "bg-blue-100"}`}>
                  {kpi.trend === "up" ? (
                    <TrendingUp
                      className={`h-4 w-4 ${kpi.status === "excellent" ? "text-green-600" : "text-blue-600"}`}
                    />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-red-600" />
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <div className="text-2xl font-bold text-gray-900">{kpi.value}</div>
                  <div className="text-sm text-gray-500">Meta: {kpi.target}</div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span>Progresso</span>
                    <span className={kpi.progress >= 100 ? "text-green-600" : "text-blue-600"}>
                      {kpi.progress.toFixed(1)}%
                    </span>
                  </div>
                  <Progress value={kpi.progress} className="h-2" />
                </div>
                <div className={`text-sm font-medium ${kpi.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                  {kpi.change} vs período anterior
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="alertas" className="space-y-4">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
          <TabsTrigger value="alertas">Alertas Estratégicos</TabsTrigger>
          <TabsTrigger value="projecoes">Projeções</TabsTrigger>
          <TabsTrigger value="competitivo">Análise Competitiva</TabsTrigger>
        </TabsList>

        <TabsContent value="alertas" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2 text-orange-500" />
                Alertas Estratégicos
              </CardTitle>
              <CardDescription>Situações que requerem atenção da alta gestão</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {alertasEstrategicos.map((alerta, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-l-4 ${
                    alerta.tipo === "critical"
                      ? "border-red-500 bg-red-50"
                      : alerta.tipo === "warning"
                        ? "border-orange-500 bg-orange-50"
                        : "border-blue-500 bg-blue-50"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{alerta.titulo}</h3>
                      <p className="text-sm text-gray-600 mt-1">{alerta.descricao}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="text-sm font-medium">Impacto: {alerta.valor}</span>
                        <span className="text-sm text-gray-500">Prazo: {alerta.prazo}</span>
                      </div>
                    </div>
                    <Badge
                      variant={
                        alerta.tipo === "critical" ? "destructive" : alerta.tipo === "warning" ? "secondary" : "default"
                      }
                    >
                      {alerta.tipo === "critical" ? "Crítico" : alerta.tipo === "warning" ? "Atenção" : "Info"}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="projecoes" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-5 w-5 mr-2 text-blue-500" />
                Projeções Trimestrais 2024
              </CardTitle>
              <CardDescription>Previsões baseadas em dados históricos e tendências</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {projecoes.map((projecao, index) => (
                  <div key={index} className="p-4 border rounded-lg space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900">{projecao.periodo}</h3>
                      <Badge variant="outline">{projecao.status}</Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Receita</span>
                        <span className="font-medium text-green-600">{projecao.receita}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Despesas</span>
                        <span className="font-medium text-red-600">{projecao.despesas}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Lucro</span>
                        <span className="font-semibold text-blue-600">{projecao.lucro}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Margem</span>
                        <span className="font-semibold">{projecao.margem}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="competitivo" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building className="h-5 w-5 mr-2 text-purple-500" />
                Análise Competitiva
              </CardTitle>
              <CardDescription>Comparação com benchmarks do mercado</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analiseCompetitiva.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{item.metrica}</h3>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-sm text-gray-600">Nossa empresa: {item.empresa}</span>
                        <span className="text-sm text-gray-600">Mercado: {item.mercado}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant={item.posicao === "Acima" ? "default" : "secondary"}>{item.posicao}</Badge>
                      <div
                        className={`text-sm font-medium mt-1 ${item.posicao === "Acima" ? "text-green-600" : "text-red-600"}`}
                      >
                        {item.diferenca}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
