"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
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
import { BarChart, Plus, TrendingUp, DollarSign, Target } from "lucide-react"

export function InvestmentModule() {
  const investimentos = [
    {
      id: 1,
      nome: "CDB Banco ABC",
      tipo: "Renda Fixa",
      valor: "R$ 150.000",
      rentabilidade: "12.5% a.a.",
      vencimento: "2025-06-15",
      risco: "Baixo",
      status: "Ativo",
      rendimento: "R$ 8.750",
    },
    {
      id: 2,
      nome: "Tesouro IPCA+",
      tipo: "Renda Fixa",
      valor: "R$ 200.000",
      rentabilidade: "IPCA + 6.2%",
      vencimento: "2027-08-15",
      risco: "Baixo",
      status: "Ativo",
      rendimento: "R$ 12.400",
    },
    {
      id: 3,
      nome: "Fundo Multimercado XYZ",
      tipo: "Renda Variável",
      valor: "R$ 100.000",
      rentabilidade: "18.3% a.a.",
      vencimento: "-",
      risco: "Alto",
      status: "Ativo",
      rendimento: "R$ 15.250",
    },
    {
      id: 4,
      nome: "LCI Banco DEF",
      tipo: "Renda Fixa",
      valor: "R$ 80.000",
      rentabilidade: "11.8% a.a.",
      vencimento: "2024-12-20",
      risco: "Baixo",
      status: "Vencendo",
      rendimento: "R$ 4.720",
    },
  ]

  const analiseRisco = [
    {
      categoria: "Renda Fixa",
      valor: "R$ 430.000",
      percentual: 79.6,
      risco: "Baixo",
      rentabilidade: "11.2%",
    },
    {
      categoria: "Renda Variável",
      valor: "R$ 100.000",
      percentual: 18.5,
      risco: "Alto",
      rentabilidade: "18.3%",
    },
    {
      categoria: "Reserva de Emergência",
      valor: "R$ 10.000",
      percentual: 1.9,
      risco: "Muito Baixo",
      rentabilidade: "8.5%",
    },
  ]

  const projecoes = [
    {
      periodo: "3 meses",
      valorAtual: "R$ 540.000",
      projecao: "R$ 555.000",
      rendimento: "R$ 15.000",
      rentabilidade: "2.8%",
    },
    {
      periodo: "6 meses",
      valorAtual: "R$ 540.000",
      projecao: "R$ 572.000",
      rendimento: "R$ 32.000",
      rentabilidade: "5.9%",
    },
    {
      periodo: "1 ano",
      valorAtual: "R$ 540.000",
      projecao: "R$ 608.000",
      rendimento: "R$ 68.000",
      rentabilidade: "12.6%",
    },
    {
      periodo: "2 anos",
      valorAtual: "R$ 540.000",
      projecao: "R$ 685.000",
      rendimento: "R$ 145.000",
      rentabilidade: "26.9%",
    },
  ]

  const oportunidades = [
    {
      nome: "CDB Premium Banco XYZ",
      tipo: "Renda Fixa",
      rentabilidade: "13.2% a.a.",
      prazo: "24 meses",
      valorMinimo: "R$ 50.000",
      risco: "Baixo",
      recomendacao: "Forte",
    },
    {
      nome: "Fundo Imobiliário ABC",
      tipo: "Fundos Imobiliários",
      rentabilidade: "9.8% a.a. + valorização",
      prazo: "Indefinido",
      valorMinimo: "R$ 10.000",
      risco: "Médio",
      recomendacao: "Moderada",
    },
    {
      nome: "Tesouro Prefixado 2029",
      tipo: "Renda Fixa",
      rentabilidade: "11.5% a.a.",
      prazo: "5 anos",
      valorMinimo: "R$ 1.000",
      risco: "Baixo",
      recomendacao: "Forte",
    },
  ]

  const resumoInvestimentos = {
    totalInvestido: "R$ 540.000",
    rendimentoMes: "R$ 5.850",
    rendimentoAno: "R$ 68.250",
    rentabilidadeMedia: "12.6%",
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 flex items-center">
            <BarChart className="h-8 w-8 mr-3 text-green-600" />
            Análise de Investimentos
          </h2>
          <p className="text-gray-500">Gestão e análise da carteira de investimentos</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Novo Investimento
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Registrar Investimento</DialogTitle>
              <DialogDescription>Adicione um novo investimento à carteira</DialogDescription>
            </DialogHeader>
            <InvestmentForm />
          </DialogContent>
        </Dialog>
      </div>

      {/* Resumo dos Investimentos */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Investido</CardTitle>
            <DollarSign className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{resumoInvestimentos.totalInvestido}</div>
            <p className="text-xs text-gray-500">patrimônio total</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rendimento Mensal</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{resumoInvestimentos.rendimentoMes}</div>
            <p className="text-xs text-gray-500">último mês</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rendimento Anual</CardTitle>
            <Target className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">{resumoInvestimentos.rendimentoAno}</div>
            <p className="text-xs text-gray-500">projeção 12 meses</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rentabilidade Média</CardTitle>
            <BarChart className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{resumoInvestimentos.rentabilidadeMedia}</div>
            <p className="text-xs text-gray-500">carteira ponderada</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="carteira" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="carteira">Carteira</TabsTrigger>
          <TabsTrigger value="analise">Análise de Risco</TabsTrigger>
          <TabsTrigger value="projecoes">Projeções</TabsTrigger>
          <TabsTrigger value="oportunidades">Oportunidades</TabsTrigger>
        </TabsList>

        <TabsContent value="carteira" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Carteira de Investimentos</CardTitle>
              <CardDescription>Todos os investimentos ativos e suas performances</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Investimento</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Valor</TableHead>
                    <TableHead>Rentabilidade</TableHead>
                    <TableHead>Vencimento</TableHead>
                    <TableHead>Risco</TableHead>
                    <TableHead>Rendimento</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {investimentos.map((investimento) => (
                    <TableRow key={investimento.id}>
                      <TableCell className="font-medium">{investimento.nome}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{investimento.tipo}</Badge>
                      </TableCell>
                      <TableCell className="font-semibold">{investimento.valor}</TableCell>
                      <TableCell className="text-green-600">{investimento.rentabilidade}</TableCell>
                      <TableCell>{investimento.vencimento}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            investimento.risco === "Baixo"
                              ? "default"
                              : investimento.risco === "Médio"
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {investimento.risco}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-semibold text-blue-600">{investimento.rendimento}</TableCell>
                      <TableCell>
                        <Badge variant={investimento.status === "Ativo" ? "default" : "secondary"}>
                          {investimento.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analise" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Análise de Risco da Carteira</CardTitle>
              <CardDescription>Distribuição por categoria de risco e rentabilidade</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {analiseRisco.map((categoria, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <h3 className="font-medium">{categoria.categoria}</h3>
                        <Badge
                          variant={
                            categoria.risco === "Muito Baixo" || categoria.risco === "Baixo"
                              ? "default"
                              : categoria.risco === "Médio"
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {categoria.risco}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{categoria.valor}</p>
                        <p className="text-sm text-green-600">{categoria.rentabilidade}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${categoria.percentual}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium">{categoria.percentual}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="projecoes" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Projeções de Rendimento</CardTitle>
              <CardDescription>Estimativas baseadas na rentabilidade atual da carteira</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {projecoes.map((projecao, index) => (
                  <div key={index} className="p-4 border rounded-lg space-y-3">
                    <div className="text-center">
                      <h3 className="font-semibold text-lg">{projecao.periodo}</h3>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Valor Atual</span>
                        <span>{projecao.valorAtual}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Projeção</span>
                        <span className="font-medium text-blue-600">{projecao.projecao}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Rendimento</span>
                        <span className="font-medium text-green-600">{projecao.rendimento}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Rentabilidade</span>
                        <span className="font-semibold">{projecao.rentabilidade}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="oportunidades" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Oportunidades de Investimento</CardTitle>
              <CardDescription>Sugestões baseadas no perfil da carteira atual</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {oportunidades.map((oportunidade, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900">{oportunidade.nome}</h3>
                        <Badge variant="outline" className="mt-1">
                          {oportunidade.tipo}
                        </Badge>
                      </div>
                      <Badge
                        variant={
                          oportunidade.recomendacao === "Forte"
                            ? "default"
                            : oportunidade.recomendacao === "Moderada"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {oportunidade.recomendacao}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Rentabilidade</p>
                        <p className="font-medium text-green-600">{oportunidade.rentabilidade}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Prazo</p>
                        <p className="font-medium">{oportunidade.prazo}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Valor Mínimo</p>
                        <p className="font-medium">{oportunidade.valorMinimo}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Risco</p>
                        <Badge
                          variant={
                            oportunidade.risco === "Baixo"
                              ? "default"
                              : oportunidade.risco === "Médio"
                                ? "secondary"
                                : "destructive"
                          }
                          className="text-xs"
                        >
                          {oportunidade.risco}
                        </Badge>
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

function InvestmentForm() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Nome do Investimento</Label>
        <Input placeholder="Ex: CDB Banco ABC, Tesouro Direto..." />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Tipo</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Selecione o tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="renda-fixa">Renda Fixa</SelectItem>
              <SelectItem value="renda-variavel">Renda Variável</SelectItem>
              <SelectItem value="fundos">Fundos</SelectItem>
              <SelectItem value="tesouro">Tesouro Direto</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Risco</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Nível de risco" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="muito-baixo">Muito Baixo</SelectItem>
              <SelectItem value="baixo">Baixo</SelectItem>
              <SelectItem value="medio">Médio</SelectItem>
              <SelectItem value="alto">Alto</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Valor Investido</Label>
          <Input placeholder="R$ 0,00" />
        </div>
        <div className="space-y-2">
          <Label>Rentabilidade</Label>
          <Input placeholder="Ex: 12.5% a.a." />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Data de Vencimento</Label>
        <Input type="date" />
      </div>

      <div className="flex justify-end space-x-2">
        <Button variant="outline">Cancelar</Button>
        <Button>Registrar Investimento</Button>
      </div>
    </div>
  )
}
