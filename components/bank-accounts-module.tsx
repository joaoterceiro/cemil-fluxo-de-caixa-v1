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
import { Plus, Building, FolderSyncIcon as Sync, Eye, ArrowUpDown } from "lucide-react"

export function BankAccountsModule() {
  const contas = [
    {
      id: 1,
      banco: "Banco do Brasil",
      agencia: "1234-5",
      conta: "12345-6",
      tipo: "Conta Corrente",
      saldo: "R$ 45.230,50",
      status: "Ativa",
      ultimaAtualizacao: "2024-01-15 14:30",
    },
    {
      id: 2,
      banco: "Itaú",
      agencia: "5678-9",
      conta: "98765-4",
      tipo: "Conta Corrente",
      saldo: "R$ 28.450,00",
      status: "Ativa",
      ultimaAtualizacao: "2024-01-15 14:25",
    },
    {
      id: 3,
      banco: "Stone",
      agencia: "-",
      conta: "Stone123",
      tipo: "Conta Digital",
      saldo: "R$ 12.680,30",
      status: "Ativa",
      ultimaAtualizacao: "2024-01-15 14:35",
    },
    {
      id: 4,
      banco: "Nubank",
      agencia: "-",
      conta: "Nu456",
      tipo: "Conta PJ",
      saldo: "R$ 8.920,00",
      status: "Ativa",
      ultimaAtualizacao: "2024-01-15 14:20",
    },
  ]

  const movimentacoes = [
    {
      id: 1,
      data: "2024-01-15",
      descricao: "Recebimento - Cliente ABC",
      tipo: "Entrada",
      valor: "R$ 5.430,00",
      conta: "Banco do Brasil",
      saldoAnterior: "R$ 39.800,50",
      saldoAtual: "R$ 45.230,50",
    },
    {
      id: 2,
      data: "2024-01-15",
      descricao: "Pagamento - Fornecedor XYZ",
      tipo: "Saída",
      valor: "R$ 2.150,00",
      conta: "Itaú",
      saldoAnterior: "R$ 30.600,00",
      saldoAtual: "R$ 28.450,00",
    },
    {
      id: 3,
      data: "2024-01-14",
      descricao: "Transferência Stone",
      tipo: "Entrada",
      valor: "R$ 3.280,50",
      conta: "Stone",
      saldoAnterior: "R$ 9.399,80",
      saldoAtual: "R$ 12.680,30",
    },
  ]

  const totalSaldo = "R$ 95.280,80"

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Contas Bancárias</h2>
          <p className="text-gray-500">Controle e conciliação de todas as contas bancárias</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Sync className="h-4 w-4 mr-2" />
            Sincronizar
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Nova Conta
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Adicionar Conta Bancária</DialogTitle>
                <DialogDescription>Cadastre uma nova conta bancária no sistema</DialogDescription>
              </DialogHeader>
              <BankAccountForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Resumo dos Saldos */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Building className="h-5 w-5 mr-2 text-blue-600" />
            Resumo Consolidado
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-600">Saldo Total</p>
              <p className="text-2xl font-bold text-blue-600">{totalSaldo}</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-gray-600">Contas Ativas</p>
              <p className="text-2xl font-bold text-green-600">{contas.length}</p>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <p className="text-sm text-gray-600">Última Sincronização</p>
              <p className="text-sm font-semibold text-orange-600">14:35 hoje</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <p className="text-sm text-gray-600">Movimentações Hoje</p>
              <p className="text-2xl font-bold text-purple-600">12</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lista de Contas */}
      <Card>
        <CardHeader>
          <CardTitle>Contas Bancárias</CardTitle>
          <CardDescription>Todas as contas cadastradas e seus saldos atuais</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Banco</TableHead>
                <TableHead>Agência/Conta</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Saldo Atual</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Última Atualização</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contas.map((conta) => (
                <TableRow key={conta.id}>
                  <TableCell className="font-medium">{conta.banco}</TableCell>
                  <TableCell>{conta.agencia !== "-" ? `${conta.agencia} / ${conta.conta}` : conta.conta}</TableCell>
                  <TableCell>{conta.tipo}</TableCell>
                  <TableCell className="font-semibold text-blue-600">{conta.saldo}</TableCell>
                  <TableCell>
                    <Badge variant="default">{conta.status}</Badge>
                  </TableCell>
                  <TableCell className="text-sm text-gray-500">{conta.ultimaAtualizacao}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <ArrowUpDown className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Movimentações Recentes */}
      <Card>
        <CardHeader>
          <CardTitle>Movimentações Recentes</CardTitle>
          <CardDescription>Últimas transações bancárias registradas</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Data</TableHead>
                <TableHead>Descrição</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead>Conta</TableHead>
                <TableHead>Saldo Anterior</TableHead>
                <TableHead>Saldo Atual</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {movimentacoes.map((mov) => (
                <TableRow key={mov.id}>
                  <TableCell>{mov.data}</TableCell>
                  <TableCell className="font-medium">{mov.descricao}</TableCell>
                  <TableCell>
                    <Badge variant={mov.tipo === "Entrada" ? "default" : "secondary"}>{mov.tipo}</Badge>
                  </TableCell>
                  <TableCell className={`font-semibold ${mov.tipo === "Entrada" ? "text-green-600" : "text-red-600"}`}>
                    {mov.tipo === "Entrada" ? "+" : "-"}
                    {mov.valor}
                  </TableCell>
                  <TableCell>{mov.conta}</TableCell>
                  <TableCell className="text-gray-500">{mov.saldoAnterior}</TableCell>
                  <TableCell className="font-semibold">{mov.saldoAtual}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

function BankAccountForm() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="banco">Banco</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Selecione o banco" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="bb">Banco do Brasil</SelectItem>
            <SelectItem value="itau">Itaú</SelectItem>
            <SelectItem value="bradesco">Bradesco</SelectItem>
            <SelectItem value="santander">Santander</SelectItem>
            <SelectItem value="stone">Stone</SelectItem>
            <SelectItem value="nubank">Nubank</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="agencia">Agência</Label>
          <Input placeholder="1234-5" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="conta">Conta</Label>
          <Input placeholder="12345-6" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="tipo">Tipo de Conta</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Selecione o tipo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="corrente">Conta Corrente</SelectItem>
            <SelectItem value="poupanca">Conta Poupança</SelectItem>
            <SelectItem value="digital">Conta Digital</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="saldo">Saldo Inicial</Label>
        <Input placeholder="R$ 0,00" />
      </div>

      <div className="flex justify-end space-x-2">
        <Button variant="outline">Cancelar</Button>
        <Button>Adicionar Conta</Button>
      </div>
    </div>
  )
}
