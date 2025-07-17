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
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Plus, Clock, CheckCircle, AlertCircle, XCircle } from "lucide-react"

export function PaymentsModule() {
  const pagamentosAgendados = [
    {
      id: 1,
      descricao: "Aluguel - Janeiro 2024",
      fornecedor: "Imobiliária ABC",
      valor: "R$ 3.500,00",
      vencimento: "2024-01-20",
      status: "Pendente",
      categoria: "Despesas Fixas",
      conta: "Banco do Brasil",
      recorrente: true,
    },
    {
      id: 2,
      descricao: "Fornecedor XYZ - Materiais",
      fornecedor: "Fornecedor XYZ Ltda",
      valor: "R$ 2.150,00",
      vencimento: "2024-01-18",
      status: "Aprovado",
      categoria: "Fornecedores",
      conta: "Itaú",
      recorrente: false,
    },
    {
      id: 3,
      descricao: "DAS - Simples Nacional",
      fornecedor: "Receita Federal",
      valor: "R$ 850,00",
      vencimento: "2024-01-20",
      status: "Agendado",
      categoria: "Impostos",
      conta: "Banco do Brasil",
      recorrente: true,
    },
    {
      id: 4,
      descricao: "Energia Elétrica",
      fornecedor: "CPFL Energia",
      valor: "R$ 420,00",
      vencimento: "2024-01-25",
      status: "Pendente",
      categoria: "Utilidades",
      conta: "Itaú",
      recorrente: true,
    },
  ]

  const historicoAprovacoes = [
    {
      id: 1,
      descricao: "Marketing Digital - Google Ads",
      valor: "R$ 1.200,00",
      solicitante: "Maria Santos",
      aprovador: "João Silva",
      dataAprovacao: "2024-01-14",
      status: "Aprovado",
    },
    {
      id: 2,
      descricao: "Equipamentos de TI",
      valor: "R$ 4.500,00",
      solicitante: "Pedro Costa",
      aprovador: "João Silva",
      dataAprovacao: "2024-01-13",
      status: "Rejeitado",
    },
  ]

  const resumoPagamentos = {
    totalPendente: "R$ 6.920,00",
    totalAprovado: "R$ 2.150,00",
    totalAgendado: "R$ 850,00",
    vencendoHoje: 2,
    vencendo3Dias: 3,
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Controle de Pagamentos</h2>
          <p className="text-gray-500">Agenda de pagamentos e aprovações</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Agendar Pagamento
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Agendar Novo Pagamento</DialogTitle>
              <DialogDescription>Cadastre um novo pagamento na agenda</DialogDescription>
            </DialogHeader>
            <PaymentForm />
          </DialogContent>
        </Dialog>
      </div>

      {/* Resumo de Pagamentos */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pendentes</CardTitle>
            <Clock className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{resumoPagamentos.totalPendente}</div>
            <p className="text-xs text-gray-500">aguardando aprovação</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Aprovados</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{resumoPagamentos.totalAprovado}</div>
            <p className="text-xs text-gray-500">prontos para pagamento</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Agendados</CardTitle>
            <Calendar className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{resumoPagamentos.totalAgendado}</div>
            <p className="text-xs text-gray-500">pagamento automático</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Vencendo Hoje</CardTitle>
            <AlertCircle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{resumoPagamentos.vencendoHoje}</div>
            <p className="text-xs text-gray-500">pagamentos</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Próximos 3 Dias</CardTitle>
            <AlertCircle className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{resumoPagamentos.vencendo3Dias}</div>
            <p className="text-xs text-gray-500">pagamentos</p>
          </CardContent>
        </Card>
      </div>

      {/* Agenda de Pagamentos */}
      <Card>
        <CardHeader>
          <CardTitle>Agenda de Pagamentos</CardTitle>
          <CardDescription>Todos os pagamentos agendados e seus status</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Descrição</TableHead>
                <TableHead>Fornecedor</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead>Vencimento</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Conta</TableHead>
                <TableHead>Recorrente</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pagamentosAgendados.map((pagamento) => (
                <TableRow key={pagamento.id}>
                  <TableCell className="font-medium">{pagamento.descricao}</TableCell>
                  <TableCell>{pagamento.fornecedor}</TableCell>
                  <TableCell className="font-semibold">{pagamento.valor}</TableCell>
                  <TableCell>{pagamento.vencimento}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        pagamento.status === "Aprovado"
                          ? "default"
                          : pagamento.status === "Agendado"
                            ? "secondary"
                            : pagamento.status === "Pendente"
                              ? "outline"
                              : "destructive"
                      }
                    >
                      {pagamento.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{pagamento.categoria}</TableCell>
                  <TableCell>{pagamento.conta}</TableCell>
                  <TableCell>
                    {pagamento.recorrente ? (
                      <Badge variant="outline" className="text-blue-600">
                        Sim
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="text-gray-600">
                        Não
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      {pagamento.status === "Pendente" && (
                        <Button variant="ghost" size="sm" className="text-green-600">
                          <CheckCircle className="h-4 w-4" />
                        </Button>
                      )}
                      {pagamento.status === "Aprovado" && (
                        <Button variant="ghost" size="sm" className="text-blue-600">
                          <Calendar className="h-4 w-4" />
                        </Button>
                      )}
                      <Button variant="ghost" size="sm" className="text-red-600">
                        <XCircle className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Histórico de Aprovações */}
      <Card>
        <CardHeader>
          <CardTitle>Histórico de Aprovações</CardTitle>
          <CardDescription>Últimas aprovações e rejeições de pagamentos</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Descrição</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead>Solicitante</TableHead>
                <TableHead>Aprovador</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {historicoAprovacoes.map((aprovacao) => (
                <TableRow key={aprovacao.id}>
                  <TableCell className="font-medium">{aprovacao.descricao}</TableCell>
                  <TableCell className="font-semibold">{aprovacao.valor}</TableCell>
                  <TableCell>{aprovacao.solicitante}</TableCell>
                  <TableCell>{aprovacao.aprovador}</TableCell>
                  <TableCell>{aprovacao.dataAprovacao}</TableCell>
                  <TableCell>
                    <Badge variant={aprovacao.status === "Aprovado" ? "default" : "destructive"}>
                      {aprovacao.status}
                    </Badge>
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

function PaymentForm() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="descricao">Descrição</Label>
        <Input placeholder="Descrição do pagamento" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="fornecedor">Fornecedor</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Selecione o fornecedor" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="fornecedor1">Fornecedor XYZ Ltda</SelectItem>
            <SelectItem value="fornecedor2">Imobiliária ABC</SelectItem>
            <SelectItem value="fornecedor3">CPFL Energia</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="valor">Valor</Label>
        <Input placeholder="R$ 0,00" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="vencimento">Data de Vencimento</Label>
        <Input type="date" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="categoria">Categoria</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Selecione a categoria" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="fornecedores">Fornecedores</SelectItem>
            <SelectItem value="impostos">Impostos</SelectItem>
            <SelectItem value="utilidades">Utilidades</SelectItem>
            <SelectItem value="despesas-fixas">Despesas Fixas</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="conta">Conta de Débito</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Selecione a conta" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="bb">Banco do Brasil</SelectItem>
            <SelectItem value="itau">Itaú</SelectItem>
            <SelectItem value="stone">Stone</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="col-span-2 space-y-2">
        <Label htmlFor="observacoes">Observações</Label>
        <Textarea placeholder="Observações adicionais..." />
      </div>

      <div className="col-span-2 flex justify-end space-x-2">
        <Button variant="outline">Cancelar</Button>
        <Button>Agendar Pagamento</Button>
      </div>
    </div>
  )
}
