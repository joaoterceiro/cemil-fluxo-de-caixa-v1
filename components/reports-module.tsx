"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { FileText, Download, TrendingUp, TrendingDown, BarChart3, PieChart, Filter } from "lucide-react"

export function ReportsModule() {
  const relatoriosDisponiveis = [
    {
      nome: "Balancete Diário",
      descricao: "Resumo diário de entradas e saídas",
      tipo: "Operacional",
      ultimaGeracao: "2024-01-15",
      formato: "PDF",
    },
    {
      nome: "DRE - Demonstrativo de Resultados",
      descricao: "Demonstrativo completo de receitas e despesas",
      tipo: "Gerencial",
      ultimaGeracao: "2024-01-01",
      formato: "Excel",
    },
    {
      nome: "Fluxo de Caixa Projetado",
      descricao: "Projeção de entradas e saídas futuras",
      tipo: "Estratégico",
      ultimaGeracao: "2024-01-10",
      formato: "PDF",
    },
    {
      nome: "Análise de Lucratividade",
      descricao: "Análise detalhada de margem e lucro por categoria",
      tipo: "Gerencial",
      ultimaGeracao: "2024-01-05",
      formato: "Excel",
    },
  ]

  const indicadoresPerformance = [
    {
      indicador: "ROI (Retorno sobre Investimento)",
      valor: "18.5%",
      variacao: "+2.3%",
      tendencia: "up",
      meta: "15%",
    },
    {
      indicador: "Margem de Lucro Líquida",
      valor: "23.9%",
      variacao: "+1.8%",
      tendencia: "up",
      meta: "20%",
    },
    {
      indicador: "Ponto de Equilíbrio",
      valor: "R$ 45.200,00",
      variacao: "-5.2%",
      tendencia: "down",
      meta: "R$ 50.000,00",
    },
    {
      indicador: "Liquidez Corrente",
      valor: "2.4",
      variacao: "+0.3",
      tendencia: "up",
      meta: "2.0",
    },
  ]

  const comparativoMensal = [
    {
      mes: "Janeiro 2024",
      receitas: "R$ 89.240,00",
      despesas: "R$ 67.890,30",
      lucro: "R$ 21.349,70",
      margem: "23.9%",
    },
    {
      mes: "Dezembro 2023",
      receitas: "R$ 82.150,00",
      despesas: "R$ 64.200,50",
      lucro: "R$ 17.949,50",
      margem: "21.8%",
    },
    {
      mes: "Novembro 2023",
      receitas: "R$ 78.900,00",
      despesas: "R$ 61.450,00",
      lucro: "R$ 17.450,00",
      margem: "22.1%",
    },
    {
      mes: "Outubro 2023",
      receitas: "R$ 85.600,00",
      despesas: "R$ 68.200,00",
      lucro: "R$ 17.400,00",
      margem: "20.3%",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Relatórios e Análises</h2>
          <p className="text-gray-500">Análises financeiras detalhadas e relatórios gerenciais</p>
        </div>
        <div className="flex items-center space-x-2">
          <Select>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hoje">Hoje</SelectItem>
              <SelectItem value="semana">Esta Semana</SelectItem>
              <SelectItem value="mes">Este Mês</SelectItem>
              <SelectItem value="trimestre">Este Trimestre</SelectItem>
              <SelectItem value="ano">Este Ano</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
        </div>
      </div>

      {/* Indicadores de Performance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <BarChart3 className="h-5 w-5 mr-2 text-blue-600" />
            Indicadores de Performance
          </CardTitle>
          <CardDescription>Principais métricas de desempenho financeiro</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {indicadoresPerformance.map((indicador, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-gray-600">{indicador.indicador}</p>
                  {indicador.tendencia === "up" ? (
                    <TrendingUp className="h-4 w-4 text-green-500" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-red-500" />
                  )}
                </div>
                <p className="text-2xl font-bold text-gray-900">{indicador.valor}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className={`text-sm ${indicador.tendencia === "up" ? "text-green-600" : "text-red-600"}`}>
                    {indicador.variacao}
                  </span>
                  <span className="text-sm text-gray-500">Meta: {indicador.meta}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Relatórios Disponíveis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="h-5 w-5 mr-2 text-green-600" />
            Relatórios Disponíveis
          </CardTitle>
          <CardDescription>Gere e baixe relatórios financeiros detalhados</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatoriosDisponiveis.map((relatorio, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-900">{relatorio.nome}</h3>
                    <p className="text-sm text-gray-600">{relatorio.descricao}</p>
                  </div>
                  <Badge variant="outline">{relatorio.tipo}</Badge>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="text-sm text-gray-500">
                    <p>Última geração: {relatorio.ultimaGeracao}</p>
                    <p>Formato: {relatorio.formato}</p>
                  </div>
                  <Button size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Gerar
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Comparativo Mensal */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <PieChart className="h-5 w-5 mr-2 text-purple-600" />
            Comparativo Mensal
          </CardTitle>
          <CardDescription>Evolução das receitas, despesas e lucro nos últimos meses</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Período</TableHead>
                <TableHead>Receitas</TableHead>
                <TableHead>Despesas</TableHead>
                <TableHead>Lucro Líquido</TableHead>
                <TableHead>Margem</TableHead>
                <TableHead>Variação</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparativoMensal.map((periodo, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{periodo.mes}</TableCell>
                  <TableCell className="text-green-600 font-semibold">{periodo.receitas}</TableCell>
                  <TableCell className="text-red-600 font-semibold">{periodo.despesas}</TableCell>
                  <TableCell className="text-blue-600 font-semibold">{periodo.lucro}</TableCell>
                  <TableCell>{periodo.margem}</TableCell>
                  <TableCell>
                    {index === 0 ? (
                      <Badge variant="default" className="bg-green-100 text-green-800">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        +19.0%
                      </Badge>
                    ) : index === 1 ? (
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        +2.9%
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="text-gray-600">
                        <TrendingDown className="h-3 w-3 mr-1" />
                        -1.2%
                      </Badge>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Gráficos de Análise */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Evolução do Fluxo de Caixa</CardTitle>
            <CardDescription>Últimos 12 meses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Gráfico de barras seria renderizado aqui</p>
                <p className="text-sm text-gray-400">Receitas vs Despesas por mês</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Distribuição de Despesas</CardTitle>
            <CardDescription>Por categoria - Janeiro 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <div className="text-center">
                <PieChart className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Gráfico de pizza seria renderizado aqui</p>
                <p className="text-sm text-gray-400">Despesas por categoria</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
