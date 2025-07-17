"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Plus, Search, Filter, ArrowUpRight, ArrowDownRight, Edit, Trash2 } from "lucide-react"

export function TransactionModule() {
  const [activeTab, setActiveTab] = useState("entradas")

  const entradas = [
    {
      id: 1,
      data: "2024-01-15",
      valor: "R$ 5.430,00",
      categoria: "Vendas",
      descricao: "Venda - Cliente ABC Ltda",
      formaPagamento: "Cartão de Crédito",
      cliente: "ABC Ltda",
      conta: "Banco do Brasil",
      status: "Confirmado",
    },
    {
      id: 2,
      data: "2024-01-14",
      valor: "R$ 3.280,50",
      categoria: "Cartão",
      descricao: "Recebimento Stone",
      formaPagamento: "TEF",
      cliente: "Diversos",
      conta: "Conta Stone",
      status: "Confirmado",
    },
    {
      id: 3,
      data: "2024-01-13",
      valor: "R$ 1.850,00",
      categoria: "Serviços",
      descricao: "Consultoria - Empresa XYZ",
      formaPagamento: "PIX",
      cliente: "Empresa XYZ",
      conta: "Itaú",
      status: "Pendente",
    },
  ]

  const saidas = [
    {
      id: 1,
      data: "2024-01-15",
      valor: "R$ 2.150,00",
      categoria: "Fornecedores",
      descricao: "Pagamento - Fornecedor XYZ",
      formaPagamento: "Transferência",
      fornecedor: "Fornecedor XYZ",
      conta: "Banco do Brasil",
      status: "Pago",
    },
    {
      id: 2,
      data: "2024-01-14",
      valor: "R$ 850,00",
      categoria: "Impostos",
      descricao: "DAS - Simples Nacional",
      formaPagamento: "Débito Automático",
      fornecedor: "Receita Federal",
      conta: "Itaú",
      status: "Pago",
    },
    {
      id: 3,
      data: "2024-01-13",
      valor: "R$ 1.200,00",
      categoria: "Marketing",
      descricao: "Google Ads - Janeiro",
      formaPagamento: "Cartão de Crédito",
      fornecedor: "Google",
      conta: "Cartão Empresarial",
      status: "Processando",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Entradas e Saídas</h2>
          <p className="text-gray-500">Controle completo de receitas e despesas</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="mt-3 md:mt-0">
              <Plus className="h-4 w-4 mr-2" />
              Nova Transação
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Nova Transação</DialogTitle>
              <DialogDescription>Registre uma nova entrada ou saída no fluxo de caixa</DialogDescription>
            </DialogHeader>
            <TransactionForm />
          </DialogContent>
        </Dialog>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-2">
          <TabsTrigger value="entradas" className="flex items-center">
            <ArrowUpRight className="h-4 w-4 mr-2 text-green-600" />
            Entradas
          </TabsTrigger>
          <TabsTrigger value="saidas" className="flex items-center">
            <ArrowDownRight className="h-4 w-4 mr-2 text-red-600" />
            Saídas
          </TabsTrigger>
        </TabsList>

        <TabsContent value="entradas" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <div>
                  <CardTitle className="text-green-600">Receitas</CardTitle>
                  <CardDescription>Controle de entradas e recebimentos</CardDescription>
                </div>
                <div className="flex items-center space-x-2 mt-3 md:mt-0">
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                    <Input placeholder="Buscar..." className="pl-8 w-64" />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filtros
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Data</TableHead>
                    <TableHead>Descrição</TableHead>
                    <TableHead>Categoria</TableHead>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Forma Pagamento</TableHead>
                    <TableHead>Valor</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {entradas.map((entrada) => (
                    <TableRow key={entrada.id}>
                      <TableCell>{entrada.data}</TableCell>
                      <TableCell className="font-medium">{entrada.descricao}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{entrada.categoria}</Badge>
                      </TableCell>
                      <TableCell>{entrada.cliente}</TableCell>
                      <TableCell>{entrada.formaPagamento}</TableCell>
                      <TableCell className="font-semibold text-green-600">{entrada.valor}</TableCell>
                      <TableCell>
                        <Badge variant={entrada.status === "Confirmado" ? "default" : "secondary"}>
                          {entrada.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="saidas" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <div>
                  <CardTitle className="text-red-600">Despesas</CardTitle>
                  <CardDescription>Controle de saídas e pagamentos</CardDescription>
                </div>
                <div className="flex items-center space-x-2 mt-3 md:mt-0">
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                    <Input placeholder="Buscar..." className="pl-8 w-64" />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filtros
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Data</TableHead>
                    <TableHead>Descrição</TableHead>
                    <TableHead>Categoria</TableHead>
                    <TableHead>Fornecedor</TableHead>
                    <TableHead>Forma Pagamento</TableHead>
                    <TableHead>Valor</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {saidas.map((saida) => (
                    <TableRow key={saida.id}>
                      <TableCell>{saida.data}</TableCell>
                      <TableCell className="font-medium">{saida.descricao}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{saida.categoria}</Badge>
                      </TableCell>
                      <TableCell>{saida.fornecedor}</TableCell>
                      <TableCell>{saida.formaPagamento}</TableCell>
                      <TableCell className="font-semibold text-red-600">{saida.valor}</TableCell>
                      <TableCell>
                        <Badge variant={saida.status === "Pago" ? "default" : "secondary"}>{saida.status}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function TransactionForm() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="tipo">Tipo de Transação</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Selecione o tipo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="entrada">Entrada</SelectItem>
            <SelectItem value="saida">Saída</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="data">Data</Label>
        <Input type="date" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="valor">Valor</Label>
        <Input placeholder="R$ 0,00" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="categoria">Categoria</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Selecione a categoria" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="vendas">Vendas</SelectItem>
            <SelectItem value="servicos">Serviços</SelectItem>
            <SelectItem value="fornecedores">Fornecedores</SelectItem>
            <SelectItem value="impostos">Impostos</SelectItem>
            <SelectItem value="marketing">Marketing</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="pagamento">Forma de Pagamento</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Selecione a forma" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="dinheiro">Dinheiro</SelectItem>
            <SelectItem value="pix">PIX</SelectItem>
            <SelectItem value="cartao">Cartão</SelectItem>
            <SelectItem value="transferencia">Transferência</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="conta">Conta Bancária</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Selecione a conta" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="bb">Banco do Brasil</SelectItem>
            <SelectItem value="itau">Itaú</SelectItem>
            <SelectItem value="stone">Conta Stone</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="col-span-1 md:col-span-2 space-y-2">
        <Label htmlFor="descricao">Descrição</Label>
        <Textarea placeholder="Descreva a transação..." />
      </div>

      <div className="col-span-1 md:col-span-2 flex justify-end space-x-2">
        <Button variant="outline">Cancelar</Button>
        <Button>Salvar Transação</Button>
      </div>
    </div>
  )
}
