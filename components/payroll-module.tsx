"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Users, Calculator, FileText, Clock } from "lucide-react"

export function PayrollModule() {
  const funcionarios = [
    {
      id: 1,
      nome: "João Silva",
      cargo: "Gerente de Vendas",
      departamento: "Vendas",
      salarioBase: "R$ 5.500,00",
      beneficios: "R$ 800,00",
      descontos: "R$ 1.200,00",
      salarioLiquido: "R$ 5.100,00",
      status: "Ativo",
    },
    {
      id: 2,
      nome: "Maria Santos",
      cargo: "Analista Financeiro",
      departamento: "Financeiro",
      salarioBase: "R$ 4.200,00",
      beneficios: "R$ 600,00",
      descontos: "R$ 950,00",
      salarioLiquido: "R$ 3.850,00",
      status: "Ativo",
    },
    {
      id: 3,
      nome: "Pedro Costa",
      cargo: "Assistente Administrativo",
      departamento: "Administrativo",
      salarioBase: "R$ 2.800,00",
      beneficios: "R$ 400,00",
      descontos: "R$ 650,00",
      salarioLiquido: "R$ 2.550,00",
      status: "Ativo",
    },
  ]

  const resumoFolha = {
    totalFuncionarios: 15,
    salarioBase: "R$ 52.800,00",
    beneficios: "R$ 7.200,00",
    descontos: "R$ 12.450,00",
    salarioLiquido: "R$ 47.550,00",
    encargos: "R$ 18.500,00",
    custoTotal: "R$ 66.050,00",
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Folha de Pagamento</h2>
          <p className="text-gray-500">Gestão completa de funcionários e custos com pessoal</p>
        </div>
        <div className="flex items-center space-x-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Calculator className="h-4 w-4 mr-2" />
                Calcular Folha
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Calcular Folha de Pagamento</DialogTitle>
                <DialogDescription>Processar folha de pagamento do mês atual</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Mês de Referência</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o mês" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="01">Janeiro 2024</SelectItem>
                      <SelectItem value="02">Fevereiro 2024</SelectItem>
                      <SelectItem value="03">Março 2024</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline">Cancelar</Button>
                  <Button>Processar Folha</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Novo Funcionário
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Cadastrar Funcionário</DialogTitle>
                <DialogDescription>Adicione um novo funcionário ao sistema</DialogDescription>
              </DialogHeader>
              <EmployeeForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Resumo da Folha */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Funcionários</CardTitle>
            <Users className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{resumoFolha.totalFuncionarios}</div>
            <p className="text-xs text-gray-500">funcionários ativos</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Salário Base</CardTitle>
            <Calculator className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{resumoFolha.salarioBase}</div>
            <p className="text-xs text-gray-500">total bruto</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Encargos</CardTitle>
            <FileText className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{resumoFolha.encargos}</div>
            <p className="text-xs text-gray-500">INSS, FGTS, IR</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Custo Total</CardTitle>
            <Clock className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{resumoFolha.custoTotal}</div>
            <p className="text-xs text-gray-500">custo empresa</p>
          </CardContent>
        </Card>
      </div>

      {/* Lista de Funcionários */}
      <Card>
        <CardHeader>
          <CardTitle>Funcionários</CardTitle>
          <CardDescription>Lista completa de funcionários e seus dados salariais</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Cargo</TableHead>
                <TableHead>Departamento</TableHead>
                <TableHead>Salário Base</TableHead>
                <TableHead>Benefícios</TableHead>
                <TableHead>Descontos</TableHead>
                <TableHead>Salário Líquido</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {funcionarios.map((funcionario) => (
                <TableRow key={funcionario.id}>
                  <TableCell className="font-medium">{funcionario.nome}</TableCell>
                  <TableCell>{funcionario.cargo}</TableCell>
                  <TableCell>{funcionario.departamento}</TableCell>
                  <TableCell>{funcionario.salarioBase}</TableCell>
                  <TableCell className="text-green-600">{funcionario.beneficios}</TableCell>
                  <TableCell className="text-red-600">{funcionario.descontos}</TableCell>
                  <TableCell className="font-semibold">{funcionario.salarioLiquido}</TableCell>
                  <TableCell>
                    <Badge variant="default">{funcionario.status}</Badge>
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

function EmployeeForm() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="nome">Nome Completo</Label>
        <Input placeholder="Digite o nome completo" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="cpf">CPF</Label>
        <Input placeholder="000.000.000-00" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="cargo">Cargo</Label>
        <Input placeholder="Digite o cargo" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="departamento">Departamento</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Selecione o departamento" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="vendas">Vendas</SelectItem>
            <SelectItem value="financeiro">Financeiro</SelectItem>
            <SelectItem value="administrativo">Administrativo</SelectItem>
            <SelectItem value="operacional">Operacional</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="salario">Salário Base</Label>
        <Input placeholder="R$ 0,00" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="admissao">Data de Admissão</Label>
        <Input type="date" />
      </div>

      <div className="col-span-2 flex justify-end space-x-2">
        <Button variant="outline">Cancelar</Button>
        <Button>Cadastrar Funcionário</Button>
      </div>
    </div>
  )
}
