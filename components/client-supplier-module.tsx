"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users2, Plus, Search, Filter, TrendingUp, TrendingDown, AlertTriangle } from "lucide-react"

export function ClientSupplierModule() {
  const [activeTab, setActiveTab] = useState("clientes")

  const clientes = [
    {
      id: 1,
      nome: "ABC Ltda",
      cnpj: "12.345.678/0001-90",
      contato: "João Silva",
      email: "joao@abc.com.br",
      telefone: "(11) 9999-9999",
      faturamento: "R$ 125.000",
      ultimaCompra: "2024-01-10",
      status: "Ativo",
      categoria: "Premium",
      credito: "R$ 50.000",
    },
    {
      id: 2,
      nome: "XYZ Comércio",
      cnpj: "98.765.432/0001-10",
      contato: "Maria Santos",
      email: "maria@xyz.com.br",
      telefone: "(11) 8888-8888",
      faturamento: "R$ 85.000",
      ultimaCompra: "2024-01-08",
      status: "Ativo",
      categoria: "Regular",
      credito: "R$ 25.000",
    },
    {
      id: 3,
      nome: "DEF Indústria",
      cnpj: "11.222.333/0001-44",
      contato: "Pedro Costa",
      email: "pedro@def.com.br",
      telefone: "(11) 7777-7777",
      faturamento: "R$ 200.000",
      ultimaCompra: "2023-12-15",
      status: "Inativo",
      categoria: "VIP",
      credito: "R$ 100.000",
    },
  ]

  const fornecedores = [
    {
      id: 1,
      nome: "Fornecedor Alpha",
      cnpj: "55.666.777/0001-88",
      contato: "Ana Oliveira",
      email: "ana@alpha.com.br",
      telefone: "(11) 6666-6666",
      gastoTotal: "R$ 180.000",
      ultimaCompra: "2024-01-12",
      status: "Ativo",
      categoria: "Estratégico",
      prazoMedio: "30 dias",
    },
    {
      id: 2,
      nome: "Beta Suprimentos",
      cnpj: "99.888.777/0001-66",
      contato: "Carlos Lima",
      email: "carlos@beta.com.br",
      telefone: "(11) 5555-5555",
      gastoTotal: "R$ 95.000",
      ultimaCompra: "2024-01-05",
      status: "Ativo",
      categoria: "Regular",
      prazoMedio: "45 dias",
    },
    {
      id: 3,
      nome: "Gamma Materiais",
      cnpj: "33.444.555/0001-22",
      contato: "Lucia Ferreira",
      email: "lucia@gamma.com.br",
      telefone: "(11) 4444-4444",
      gastoTotal: "R$ 65.000",
      ultimaCompra: "2023-11-20",
      status: "Pendente",
      categoria: "Ocasional",
      prazoMedio: "60 dias",
    },
  ]

  const analiseClientes = {
    totalClientes: 156,
    clientesAtivos: 142,
    faturamentoTotal: "R$ 2.450.000",
    ticketMedio: "R$ 15.705",
    crescimento: "+12.5%",
  }

  const analiseFornecedores = {
    totalFornecedores: 89,
    fornecedoresAtivos: 76,
    gastoTotal: "R$ 1.680.000",
    gastoMedio: "R$ 18.876",
    economia: "-8.3%",
  }

  const alertas = [
    {
      tipo: "cliente",
      titulo: "Cliente DEF Indústria Inativo",
      descricao: "Sem compras há mais de 30 dias",
      valor: "R$ 200.000",
      urgencia: "alta",
    },
    {
      tipo: "fornecedor",
      titulo: "Gamma Materiais - Pagamento Pendente",
      descricao: "Fatura vencida há 15 dias",
      valor: "R$ 12.500",
      urgencia: "critica",
    },
    {
      tipo: "cliente",
      titulo: "Limite de Crédito ABC Ltda",
      descricao: "Próximo ao limite de crédito aprovado",
      valor: "R$ 45.000",
      urgencia: "media",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 flex items-center">
            <Users2 className="h-8 w-8 mr-3 text-indigo-600" />
            Clientes e Fornecedores
          </h2>
          <p className="text-gray-500">Gestão completa de relacionamentos comerciais</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <Input placeholder="Buscar..." className="pl-8 w-64" />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Novo Cadastro
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Novo Cadastro</DialogTitle>
                <DialogDescription>Cadastre um novo cliente ou fornecedor</DialogDescription>
              </DialogHeader>
              <ClientSupplierForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Resumo Geral */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-blue-600">Resumo - Clientes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Total de Clientes</p>
                <p className="text-2xl font-bold">{analiseClientes.totalClientes}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Clientes Ativos</p>
                <p className="text-2xl font-bold text-green-600">{analiseClientes.clientesAtivos}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Faturamento Total</p>
                <p className="text-xl font-bold text-blue-600">{analiseClientes.faturamentoTotal}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Ticket Médio</p>
                <p className="text-xl font-bold">{analiseClientes.ticketMedio}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-600 font-medium">{analiseClientes.crescimento}</span>
              <span className="text-gray-500 ml-1">vs mês anterior</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-orange-600">Resumo - Fornecedores</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Total Fornecedores</p>
                <p className="text-2xl font-bold">{analiseFornecedores.totalFornecedores}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Fornecedores Ativos</p>
                <p className="text-2xl font-bold text-green-600">{analiseFornecedores.fornecedoresAtivos}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Gasto Total</p>
                <p className="text-xl font-bold text-red-600">{analiseFornecedores.gastoTotal}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Gasto Médio</p>
                <p className="text-xl font-bold">{analiseFornecedores.gastoMedio}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <TrendingDown className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-600 font-medium">{analiseFornecedores.economia}</span>
              <span className="text-gray-500 ml-1">economia vs mês anterior</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alertas */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <AlertTriangle className="h-5 w-5 mr-2 text-orange-500" />
            Alertas e Notificações
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {alertas.map((alerta, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg border-l-4 ${
                  alerta.urgencia === "critica"
                    ? "border-red-500 bg-red-50"
                    : alerta.urgencia === "alta"
                      ? "border-orange-500 bg-orange-50"
                      : "border-yellow-500 bg-yellow-50"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900">{alerta.titulo}</h3>
                    <p className="text-sm text-gray-600">{alerta.descricao}</p>
                    <p className="text-sm font-medium mt-1">Valor: {alerta.valor}</p>
                  </div>
                  <Badge
                    variant={
                      alerta.urgencia === "critica"
                        ? "destructive"
                        : alerta.urgencia === "alta"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {alerta.urgencia === "critica" ? "Crítico" : alerta.urgencia === "alta" ? "Alto" : "Médio"}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="clientes">Clientes</TabsTrigger>
          <TabsTrigger value="fornecedores">Fornecedores</TabsTrigger>
        </TabsList>

        <TabsContent value="clientes" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Lista de Clientes</CardTitle>
              <CardDescription>Todos os clientes cadastrados e suas informações</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Contato</TableHead>
                    <TableHead>Faturamento</TableHead>
                    <TableHead>Última Compra</TableHead>
                    <TableHead>Categoria</TableHead>
                    <TableHead>Limite Crédito</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {clientes.map((cliente) => (
                    <TableRow key={cliente.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{cliente.nome}</p>
                          <p className="text-sm text-gray-500">{cliente.cnpj}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="text-sm">{cliente.contato}</p>
                          <p className="text-sm text-gray-500">{cliente.email}</p>
                        </div>
                      </TableCell>
                      <TableCell className="font-semibold text-green-600">{cliente.faturamento}</TableCell>
                      <TableCell>{cliente.ultimaCompra}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            cliente.categoria === "VIP"
                              ? "default"
                              : cliente.categoria === "Premium"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {cliente.categoria}
                        </Badge>
                      </TableCell>
                      <TableCell>{cliente.credito}</TableCell>
                      <TableCell>
                        <Badge variant={cliente.status === "Ativo" ? "default" : "secondary"}>{cliente.status}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fornecedores" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Lista de Fornecedores</CardTitle>
              <CardDescription>Todos os fornecedores cadastrados e suas informações</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Fornecedor</TableHead>
                    <TableHead>Contato</TableHead>
                    <TableHead>Gasto Total</TableHead>
                    <TableHead>Última Compra</TableHead>
                    <TableHead>Categoria</TableHead>
                    <TableHead>Prazo Médio</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {fornecedores.map((fornecedor) => (
                    <TableRow key={fornecedor.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{fornecedor.nome}</p>
                          <p className="text-sm text-gray-500">{fornecedor.cnpj}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="text-sm">{fornecedor.contato}</p>
                          <p className="text-sm text-gray-500">{fornecedor.email}</p>
                        </div>
                      </TableCell>
                      <TableCell className="font-semibold text-red-600">{fornecedor.gastoTotal}</TableCell>
                      <TableCell>{fornecedor.ultimaCompra}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            fornecedor.categoria === "Estratégico"
                              ? "default"
                              : fornecedor.categoria === "Regular"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {fornecedor.categoria}
                        </Badge>
                      </TableCell>
                      <TableCell>{fornecedor.prazoMedio}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            fornecedor.status === "Ativo"
                              ? "default"
                              : fornecedor.status === "Pendente"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {fornecedor.status}
                        </Badge>
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

function ClientSupplierForm() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Tipo de Cadastro</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Selecione o tipo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="cliente">Cliente</SelectItem>
            <SelectItem value="fornecedor">Fornecedor</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Nome/Razão Social</Label>
          <Input placeholder="Nome da empresa" />
        </div>
        <div className="space-y-2">
          <Label>CNPJ</Label>
          <Input placeholder="00.000.000/0000-00" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Contato Principal</Label>
          <Input placeholder="Nome do contato" />
        </div>
        <div className="space-y-2">
          <Label>Telefone</Label>
          <Input placeholder="(00) 00000-0000" />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Email</Label>
        <Input type="email" placeholder="contato@empresa.com.br" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Categoria</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Selecione a categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="vip">VIP</SelectItem>
              <SelectItem value="premium">Premium</SelectItem>
              <SelectItem value="regular">Regular</SelectItem>
              <SelectItem value="ocasional">Ocasional</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Limite de Crédito</Label>
          <Input placeholder="R$ 0,00" />
        </div>
      </div>

      <div className="flex justify-end space-x-2">
        <Button variant="outline">Cancelar</Button>
        <Button>Cadastrar</Button>
      </div>
    </div>
  )
}
