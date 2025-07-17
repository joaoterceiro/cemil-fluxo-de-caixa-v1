"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
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
import { Building, Plus, TrendingUp, TrendingDown, PieChart } from "lucide-react"

export function CostCenterModule() {
  const centrosCusto = [
    {
      id: 1,
      nome: "Vendas",
      responsavel: "João Silva",
      orcamento: "R$ 450.000",
      gasto: "R$ 380.000",
      percentual: 84.4,
      variacao: "-15.6%",
      status: "good",
      funcionarios: 8,
    },
    {
      id: 2,
      nome: "Marketing",
      responsavel: "Maria Santos",
      orcamento: "R$ 200.000",
      gasto: "R$ 220.000",
      percentual: 110.0,
      variacao: "+10.0%",
      status: "attention",
      funcionarios: 4,
    },
    {
      id: 3,
      nome: "Operações",
      responsavel: "Pedro Costa",
      orcamento: "R$ 600.000",
      gasto: "R$ 550.000",
      percentual: 91.7,
      variacao: "-8.3%",
      status: "good",
      funcionarios: 12,
    },
    {
      id: 4,
      nome: "TI",
      responsavel: "Ana Oliveira",
      orcamento: "R$ 300.000",
      gasto: "R$ 285.000",
      percentual: 95.0,
      variacao: "-5.0%",
      status: "good",
      funcionarios: 6,
    },
    {
      id: 5,
      nome: "Administrativo",
      responsavel: "Carlos Lima",
      orcamento: "R$ 250.000",
      gasto: "R$ 275.000",
      percentual: 110.0,
      variacao: "+10.0%",
      status: "critical",
      funcionarios: 5,
    },
  ]

  const analiseDetalhada = [
    {
      centro: "Vendas",
      categoria: "Comissões",
      orcado: "R$ 180.000",
      realizado: "R$ 165.000",
      variacao: "-8.3%",
    },
    {
      centro: "Vendas",
      categoria: "Viagens",
      orcado: "R$ 45.000",
      realizado: "R$ 38.000",
      variacao: "-15.6%",
    },
    {
      centro: "Marketing",
      categoria: "Publicidade Digital",
      orcado: "R$ 120.000",
      realizado: "R$ 135.000",
      variacao: "+12.5%",
    },
    {
      centro: "Marketing",
      categoria: "Eventos",
      orcado: "R$ 50.000",
      realizado: "R$ 55.000",
      variacao: "+10.0%",
    },
    {
      centro: "TI",
      categoria: "Software",
      orcado: "R$ 150.000",
      realizado: "R$ 145.000",
      variacao: "-3.3%",
    },
  ]

  const resumoGeral = {
    totalCentros: 5,
    orcamentoTotal: "R$ 1.800.000",
    gastoTotal: "R$ 1.710.000",
    economiaTotal: "R$ 90.000",
    percentualGasto: 95.0,
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 flex items-center">
            <Building className="h-8 w-8 mr-3 text-purple-600" />
            Centro de Custos
          </h2>
          <p className="text-gray-500">Controle de custos por departamento e responsabilidade</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Novo Centro
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Criar Centro de Custo</DialogTitle>
              <DialogDescription>Configure um novo centro de custo</DialogDescription>
            </DialogHeader>
            <CostCenterForm />
          </DialogContent>
        </Dialog>
      </div>

      {/* Resumo Geral */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <PieChart className="h-5 w-5 mr-2 text-blue-600" />
            Resumo Geral dos Centros de Custo
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-600">Total de Centros</p>
              <p className="text-2xl font-bold text-blue-600">{resumoGeral.totalCentros}</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-gray-600">Orçamento Total</p>
              <p className="text-xl font-bold text-green-600">{resumoGeral.orcamentoTotal}</p>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <p className="text-sm text-gray-600">Gasto Total</p>
              <p className="text-xl font-bold text-orange-600">{resumoGeral.gastoTotal}</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <p className="text-sm text-gray-600">Economia</p>
              <p className="text-xl font-bold text-purple-600">{resumoGeral.economiaTotal}</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">% Executado</p>
              <p className="text-xl font-bold text-gray-900">{resumoGeral.percentualGasto}%</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lista de Centros de Custo */}
      <Card>
        <CardHeader>
          <CardTitle>Centros de Custo</CardTitle>
          <CardDescription>Performance de cada centro de custo</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Centro de Custo</TableHead>
                <TableHead>Responsável</TableHead>
                <TableHead>Orçamento</TableHead>
                <TableHead>Gasto</TableHead>
                <TableHead>Execução</TableHead>
                <TableHead>Variação</TableHead>
                <TableHead>Funcionários</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {centrosCusto.map((centro) => (
                <TableRow key={centro.id}>
                  <TableCell className="font-medium">{centro.nome}</TableCell>
                  <TableCell>{centro.responsavel}</TableCell>
                  <TableCell>{centro.orcamento}</TableCell>
                  <TableCell className="font-semibold">{centro.gasto}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Progress value={centro.percentual} className="w-16 h-2" />
                      <span className="text-sm">{centro.percentual}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      {centro.variacao.startsWith("-") ? (
                        <TrendingDown className="h-4 w-4 text-green-500 mr-1" />
                      ) : (
                        <TrendingUp className="h-4 w-4 text-red-500 mr-1" />
                      )}
                      <span className={centro.variacao.startsWith("-") ? "text-green-600" : "text-red-600"}>
                        {centro.variacao}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>{centro.funcionarios}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        centro.status === "good"
                          ? "default"
                          : centro.status === "attention"
                            ? "secondary"
                            : "destructive"
                      }
                    >
                      {centro.status === "good" ? "Bom" : centro.status === "attention" ? "Atenção" : "Crítico"}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Análise Detalhada */}
      <Card>
        <CardHeader>
          <CardTitle>Análise Detalhada por Categoria</CardTitle>
          <CardDescription>Breakdown de gastos por categoria dentro de cada centro</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Centro de Custo</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Orçado</TableHead>
                <TableHead>Realizado</TableHead>
                <TableHead>Variação</TableHead>
                <TableHead>Performance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {analiseDetalhada.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.centro}</TableCell>
                  <TableCell>{item.categoria}</TableCell>
                  <TableCell>{item.orcado}</TableCell>
                  <TableCell className="font-semibold">{item.realizado}</TableCell>
                  <TableCell className={item.variacao.startsWith("-") ? "text-green-600" : "text-red-600"}>
                    {item.variacao}
                  </TableCell>
                  <TableCell>
                    {item.variacao.startsWith("-") ? (
                      <Badge variant="default">Economia</Badge>
                    ) : (
                      <Badge variant="secondary">Excesso</Badge>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

function CostCenterForm() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Nome do Centro de Custo</Label>
        <Input placeholder="Ex: Vendas, Marketing, TI..." />
      </div>

      <div className="space-y-2">
        <Label>Responsável</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Selecione o responsável" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="joao">João Silva</SelectItem>
            <SelectItem value="maria">Maria Santos</SelectItem>
            <SelectItem value="pedro">Pedro Costa</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Orçamento Anual</Label>
          <Input placeholder="R$ 0,00" />
        </div>
        <div className="space-y-2">
          <Label>Número de Funcionários</Label>
          <Input type="number" placeholder="0" />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Descrição</Label>
        <Input placeholder="Descrição do centro de custo..." />
      </div>

      <div className="flex justify-end space-x-2">
        <Button variant="outline">Cancelar</Button>
        <Button>Criar Centro</Button>
      </div>
    </div>
  )
}
