"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Target, Plus, AlertTriangle, CheckCircle } from "lucide-react"

export function BudgetModule() {
  const [activeTab, setActiveTab] = useState("overview")

  const orcamentoAnual = {
    totalOrcado: "R$ 2.800.000",
    totalRealizado: "R$ 2.450.000",
    percentualRealizado: 87.5,
    variacao: "R$ -350.000",
    status: "attention",
  }

  const orcamentoPorCategoria = [
    {
      categoria: "Receitas",
      orcado: "R$ 2.800.000",
      realizado: "R$ 2.450.000",
      percentual: 87.5,
      variacao: "-12.5%",
      status: "attention",
    },
    {
      categoria: "Vendas",
      orcado: "R$ 2.200.000",
      realizado: "R$ 1.950.000",
      percentual: 88.6,
      variacao: "-11.4%",
      status: "attention",
    },
    {
      categoria: "Serviços",
      orcado: "R$ 600.000",
      realizado: "R$ 500.000",
      percentual: 83.3,
      variacao: "-16.7%",
      status: "critical",
    },
    {
      categoria: "Despesas Operacionais",
      orcado: "R$ 1.800.000",
      realizado: "R$ 1.650.000",
      percentual: 91.7,
      variacao: "-8.3%",
      status: "good",
    },
    {
      categoria: "Pessoal",
      orcado: "R$ 900.000",
      realizado: "R$ 850.000",
      percentual: 94.4,
      variacao: "-5.6%",
      status: "good",
    },
    {
      categoria: "Marketing",
      orcado: "R$ 200.000",
      realizado: "R$ 180.000",
      percentual: 90.0,
      variacao: "-10.0%",
      status: "good",
    },
  ]

  const orcamentoMensal = [
    {
      mes: "Janeiro",
      orcado: "R$ 233.333",
      realizado: "R$ 204.167",
      variacao: "-12.5%",
      status: "attention",
    },
    {
      mes: "Fevereiro",
      orcado: "R$ 233.333",
      realizado: "R$ 245.000",
      variacao: "+5.0%",
      status: "good",
    },
    {
      mes: "Março",
      orcado: "R$ 233.333",
      realizado: "R$ 220.000",
      variacao: "-5.7%",
      status: "attention",
    },
    {
      mes: "Abril",
      orcado: "R$ 233.333",
      realizado: "R$ 210.000",
      variacao: "-10.0%",
      status: "attention",
    },
  ]

  const cenarios = [
    {
      nome: "Cenário Otimista",
      receita: "R$ 3.200.000",
      despesas: "R$ 2.100.000",
      lucro: "R$ 1.100.000",
      margem: "34.4%",
      probabilidade: "25%",
    },
    {
      nome: "Cenário Realista",
      receita: "R$ 2.800.000",
      despesas: "R$ 2.000.000",
      lucro: "R$ 800.000",
      margem: "28.6%",
      probabilidade: "60%",
    },
    {
      nome: "Cenário Pessimista",
      receita: "R$ 2.400.000",
      despesas: "R$ 1.900.000",
      lucro: "R$ 500.000",
      margem: "20.8%",
      probabilidade: "15%",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 flex items-center">
            <Target className="h-8 w-8 mr-3 text-blue-600" />
            Orçamento e Planejamento
          </h2>
          <p className="text-gray-500">Controle orçamentário e planejamento financeiro</p>
        </div>
        <div className="flex items-center space-x-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Novo Orçamento</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Criar Novo Orçamento</DialogTitle>
                <DialogDescription>Configure um novo orçamento anual ou mensal</DialogDescription>
              </DialogHeader>
              <BudgetForm />
            </DialogContent>
          </Dialog>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Nova Meta
          </Button>
        </div>
      </div>

      {/* Resumo Orçamentário */}
      <Card>
        <CardHeader>
          <CardTitle>Resumo Orçamentário 2024</CardTitle>
          <CardDescription>Performance geral vs orçamento planejado</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Total Orçado</p>
              <p className="text-2xl font-bold text-blue-600">{orcamentoAnual.totalOrcado}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Total Realizado</p>
              <p className="text-2xl font-bold text-green-600">{orcamentoAnual.totalRealizado}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Variação</p>
              <p className="text-2xl font-bold text-red-600">{orcamentoAnual.variacao}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Realização</p>
              <div className="space-y-2">
                <p className="text-2xl font-bold">{orcamentoAnual.percentualRealizado}%</p>
                <Progress value={orcamentoAnual.percentualRealizado} className="h-2" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="categories">Por Categoria</TabsTrigger>
          <TabsTrigger value="monthly">Mensal</TabsTrigger>
          <TabsTrigger value="scenarios">Cenários</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Alertas Orçamentários</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-red-50 border-l-4 border-red-500">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-red-900">Receita de Serviços Abaixo da Meta</p>
                    <p className="text-sm text-red-700">16.7% abaixo do orçado para o período</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-orange-50 border-l-4 border-orange-500">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-orange-900">Vendas Precisam de Atenção</p>
                    <p className="text-sm text-orange-700">11.4% abaixo da meta trimestral</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-green-50 border-l-4 border-green-500">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-green-900">Despesas Controladas</p>
                    <p className="text-sm text-green-700">8.3% abaixo do orçamento</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Projeção para o Ano</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Receita Projetada</span>
                    <span className="font-semibold text-green-600">R$ 2.940.000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Despesas Projetadas</span>
                    <span className="font-semibold text-red-600">R$ 2.200.000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Lucro Projetado</span>
                    <span className="font-semibold text-blue-600">R$ 740.000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Margem Projetada</span>
                    <span className="font-semibold">25.2%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="categories" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Orçamento por Categoria</CardTitle>
              <CardDescription>Comparação entre orçado vs realizado por categoria</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Categoria</TableHead>
                    <TableHead>Orçado</TableHead>
                    <TableHead>Realizado</TableHead>
                    <TableHead>Realização</TableHead>
                    <TableHead>Variação</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orcamentoPorCategoria.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{item.categoria}</TableCell>
                      <TableCell>{item.orcado}</TableCell>
                      <TableCell>{item.realizado}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Progress value={item.percentual} className="w-16 h-2" />
                          <span className="text-sm">{item.percentual}%</span>
                        </div>
                      </TableCell>
                      <TableCell className={item.variacao.startsWith("-") ? "text-red-600" : "text-green-600"}>
                        {item.variacao}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            item.status === "good"
                              ? "default"
                              : item.status === "attention"
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {item.status === "good" ? "Bom" : item.status === "attention" ? "Atenção" : "Crítico"}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="monthly" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Performance Mensal</CardTitle>
              <CardDescription>Acompanhamento mês a mês vs orçamento</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {orcamentoMensal.map((mes, index) => (
                  <div key={index} className="p-4 border rounded-lg space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{mes.mes}</h3>
                      <Badge variant={mes.status === "good" ? "default" : "secondary"}>
                        {mes.status === "good" ? "Meta" : "Abaixo"}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Orçado</span>
                        <span>{mes.orcado}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Realizado</span>
                        <span className="font-medium">{mes.realizado}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Variação</span>
                        <span className={mes.variacao.startsWith("+") ? "text-green-600" : "text-red-600"}>
                          {mes.variacao}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scenarios" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Análise de Cenários</CardTitle>
              <CardDescription>Projeções baseadas em diferentes cenários econômicos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cenarios.map((cenario, index) => (
                  <div key={index} className="p-6 border rounded-lg space-y-4">
                    <div className="text-center">
                      <h3 className="font-semibold text-lg">{cenario.nome}</h3>
                      <Badge variant="outline" className="mt-2">
                        {cenario.probabilidade} probabilidade
                      </Badge>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Receita</span>
                        <span className="font-medium text-green-600">{cenario.receita}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Despesas</span>
                        <span className="font-medium text-red-600">{cenario.despesas}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Lucro</span>
                        <span className="font-semibold text-blue-600">{cenario.lucro}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Margem</span>
                        <span className="font-semibold">{cenario.margem}</span>
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

function BudgetForm() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Tipo de Orçamento</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Selecione o tipo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="anual">Orçamento Anual</SelectItem>
            <SelectItem value="trimestral">Orçamento Trimestral</SelectItem>
            <SelectItem value="mensal">Orçamento Mensal</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Ano</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Selecione o ano" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2025">2025</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Categoria</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Selecione a categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="receitas">Receitas</SelectItem>
              <SelectItem value="despesas">Despesas</SelectItem>
              <SelectItem value="investimentos">Investimentos</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label>Valor Orçado</Label>
        <Input placeholder="R$ 0,00" />
      </div>

      <div className="flex justify-end space-x-2">
        <Button variant="outline">Cancelar</Button>
        <Button>Criar Orçamento</Button>
      </div>
    </div>
  )
}
