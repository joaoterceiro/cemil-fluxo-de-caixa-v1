"use client"

import { useState } from "react"
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
import { Calendar } from "@/components/ui/calendar"
import { FileText, Plus, AlertTriangle, Calculator, TrendingUp } from "lucide-react"
import { ptBR } from "date-fns/locale"

export function TaxModule() {
  const [activeTab, setActiveTab] = useState("obrigacoes")
  const [date, setDate] = useState<Date>()

  const obrigacoesFiscais = [
    {
      id: 1,
      nome: "DAS - Simples Nacional",
      tipo: "Mensal",
      valor: "R$ 2.450,00",
      vencimento: "2024-01-20",
      status: "Pendente",
      competencia: "12/2023",
      multa: "R$ 0,00",
      juros: "R$ 0,00",
      diasVencimento: 5,
    },
    {
      id: 2,
      nome: "IRPJ - Imposto de Renda",
      tipo: "Trimestral",
      valor: "R$ 8.750,00",
      vencimento: "2024-01-31",
      status: "Calculado",
      competencia: "Q4/2023",
      multa: "R$ 0,00",
      juros: "R$ 0,00",
      diasVencimento: 16,
    },
    {
      id: 3,
      nome: "CSLL - Contribuição Social",
      tipo: "Trimestral",
      valor: "R$ 3.200,00",
      vencimento: "2024-01-31",
      status: "Calculado",
      competencia: "Q4/2023",
      multa: "R$ 0,00",
      juros: "R$ 0,00",
      diasVencimento: 16,
    },
    {
      id: 4,
      nome: "PIS/COFINS",
      tipo: "Mensal",
      valor: "R$ 1.850,00",
      vencimento: "2024-01-25",
      status: "Pago",
      competencia: "12/2023",
      multa: "R$ 0,00",
      juros: "R$ 0,00",
      diasVencimento: -5,
    },
  ]

  const planejamentoTributario = [
    {
      regime: "Simples Nacional",
      aliquota: "6.0%",
      impostoMes: "R$ 12.450,00",
      impostoAno: "R$ 149.400,00",
      economia: "R$ 0,00",
      status: "Atual",
    },
    {
      regime: "Lucro Presumido",
      aliquota: "11.33%",
      impostoMes: "R$ 23.580,00",
      impostoAno: "R$ 282.960,00",
      economia: "R$ -133.560,00",
      status: "Simulação",
    },
    {
      regime: "Lucro Real",
      aliquota: "15.25%",
      impostoMes: "R$ 31.725,00",
      impostoAno: "R$ 380.700,00",
      economia: "R$ -231.300,00",
      status: "Simulação",
    },
  ]

  const historicoImpostos = [
    {
      mes: "Dezembro 2023",
      das: "R$ 2.450,00",
      irpj: "R$ 2.917,00",
      csll: "R$ 1.067,00",
      pis: "R$ 617,00",
      cofins: "R$ 1.233,00",
      total: "R$ 8.284,00",
      status: "Pago",
    },
    {
      mes: "Novembro 2023",
      das: "R$ 2.280,00",
      irpj: "R$ 2.710,00",
      csll: "R$ 992,00",
      pis: "R$ 573,00",
      cofins: "R$ 1.146,00",
      total: "R$ 7.701,00",
      status: "Pago",
    },
    {
      mes: "Outubro 2023",
      das: "R$ 2.650,00",
      irpj: "R$ 3.150,00",
      csll: "R$ 1.152,00",
      pis: "R$ 665,00",
      cofins: "R$ 1.330,00",
      total: "R$ 8.947,00",
      status: "Pago",
    },
  ]

  const alertasFiscais = [
    {
      tipo: "Vencimento Próximo",
      descricao: "DAS vence em 5 dias",
      valor: "R$ 2.450,00",
      prazo: "20/01/2024",
      gravidade: "Alta",
    },
    {
      tipo: "Mudança de Alíquota",
      descricao: "Alíquota do Simples Nacional aumentará em fevereiro",
      valor: "6.0% → 6.84%",
      prazo: "01/02/2024",
      gravidade: "Média",
    },
    {
      tipo: "Declaração Pendente",
      descricao: "DEFIS 2023 ainda não foi transmitida",
      valor: "-",
      prazo: "31/03/2024",
      gravidade: "Baixa",
    },
  ]

  const resumoTributario = {
    impostosMes: "R$ 16.250,00",
    impostosAno: "R$ 195.000,00",
    cargaTributaria: "7.8%",
    economiaAno: "R$ 45.000,00",
    proximosVencimentos: 3,
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 flex items-center">
            <FileText className="h-8 w-8 mr-3 text-red-600" />
            Gestão Tributária
          </h2>
          <p className="text-gray-500">Controle completo de impostos e obrigações fiscais</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Calculator className="h-4 w-4 mr-2" />
            Calcular Impostos
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Nova Obrigação
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Nova Obrigação Fiscal</DialogTitle>
                <DialogDescription>Cadastre uma nova obrigação tributária</DialogDescription>
              </DialogHeader>
              <TaxForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Resumo Tributário */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Impostos/Mês</CardTitle>
            <Calculator className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{resumoTributario.impostosMes}</div>
            <p className="text-xs text-gray-500">média mensal</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Impostos/Ano</CardTitle>
            <TrendingUp className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{resumoTributario.impostosAno}</div>
            <p className="text-xs text-gray-500">projeção anual</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Carga Tributária</CardTitle>
            <FileText className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">{resumoTributario.cargaTributaria}</div>
            <p className="text-xs text-gray-500">sobre faturamento</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Economia Anual</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{resumoTributario.economiaAno}</div>
            <p className="text-xs text-gray-500">vs regime anterior</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Próximos Vencimentos</CardTitle>
            <AlertTriangle className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{resumoTributario.proximosVencimentos}</div>
            <p className="text-xs text-gray-500">próximos 30 dias</p>
          </CardContent>
        </Card>
      </div>

      {/* Alertas Fiscais */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <AlertTriangle className="h-5 w-5 mr-2 text-orange-500" />
            Alertas Fiscais
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {alertasFiscais.map((alerta, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg border-l-4 ${
                  alerta.gravidade === "Alta"
                    ? "border-red-500 bg-red-50"
                    : alerta.gravidade === "Média"
                      ? "border-orange-500 bg-orange-50"
                      : "border-yellow-500 bg-yellow-50"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900">{alerta.tipo}</h3>
                    <p className="text-sm text-gray-600">{alerta.descricao}</p>
                    <div className="flex items-center space-x-4 mt-1 text-sm">
                      <span>Valor: {alerta.valor}</span>
                      <span>Prazo: {alerta.prazo}</span>
                    </div>
                  </div>
                  <Badge
                    variant={
                      alerta.gravidade === "Alta"
                        ? "destructive"
                        : alerta.gravidade === "Média"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {alerta.gravidade}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="obrigacoes">Obrigações</TabsTrigger>
          <TabsTrigger value="planejamento">Planejamento</TabsTrigger>
          <TabsTrigger value="historico">Histórico</TabsTrigger>
          <TabsTrigger value="calendario">Calendário</TabsTrigger>
        </TabsList>

        <TabsContent value="obrigacoes" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Obrigações Fiscais</CardTitle>
              <CardDescription>Todas as obrigações tributárias e seus status</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Obrigação</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Competência</TableHead>
                    <TableHead>Valor</TableHead>
                    <TableHead>Vencimento</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Multa/Juros</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {obrigacoesFiscais.map((obrigacao) => (
                    <TableRow key={obrigacao.id}>
                      <TableCell className="font-medium">{obrigacao.nome}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{obrigacao.tipo}</Badge>
                      </TableCell>
                      <TableCell>{obrigacao.competencia}</TableCell>
                      <TableCell className="font-semibold">{obrigacao.valor}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          {obrigacao.vencimento}
                          {obrigacao.diasVencimento > 0 && obrigacao.diasVencimento <= 7 && (
                            <AlertTriangle className="h-4 w-4 text-orange-500 ml-2" />
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            obrigacao.status === "Pago"
                              ? "default"
                              : obrigacao.status === "Pendente"
                                ? "destructive"
                                : "secondary"
                          }
                        >
                          {obrigacao.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {obrigacao.multa !== "R$ 0,00" || obrigacao.juros !== "R$ 0,00" ? (
                          <div className="text-red-600 text-sm">
                            <div>Multa: {obrigacao.multa}</div>
                            <div>Juros: {obrigacao.juros}</div>
                          </div>
                        ) : (
                          <span className="text-green-600 text-sm">Sem pendências</span>
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-1">
                          <Button variant="ghost" size="sm">
                            Pagar
                          </Button>
                          <Button variant="ghost" size="sm">
                            Calcular
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

        <TabsContent value="planejamento" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Planejamento Tributário</CardTitle>
              <CardDescription>Comparação entre regimes tributários</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {planejamentoTributario.map((regime, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">{regime.regime}</h3>
                        <p className="text-sm text-gray-600">Alíquota média: {regime.aliquota}</p>
                      </div>
                      <Badge variant={regime.status === "Atual" ? "default" : "outline"}>{regime.status}</Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Imposto/Mês</p>
                        <p className="font-semibold text-red-600">{regime.impostoMes}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Imposto/Ano</p>
                        <p className="font-semibold text-red-600">{regime.impostoAno}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Economia Anual</p>
                        <p
                          className={`font-semibold ${regime.economia.startsWith("-") ? "text-red-600" : "text-green-600"}`}
                        >
                          {regime.economia}
                        </p>
                      </div>
                      <div>
                        {regime.status === "Simulação" && (
                          <Button size="sm" variant="outline">
                            Simular Mudança
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="historico" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Histórico de Impostos</CardTitle>
              <CardDescription>Histórico detalhado de pagamentos tributários</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Período</TableHead>
                    <TableHead>DAS</TableHead>
                    <TableHead>IRPJ</TableHead>
                    <TableHead>CSLL</TableHead>
                    <TableHead>PIS</TableHead>
                    <TableHead>COFINS</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {historicoImpostos.map((historico, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{historico.mes}</TableCell>
                      <TableCell>{historico.das}</TableCell>
                      <TableCell>{historico.irpj}</TableCell>
                      <TableCell>{historico.csll}</TableCell>
                      <TableCell>{historico.pis}</TableCell>
                      <TableCell>{historico.cofins}</TableCell>
                      <TableCell className="font-semibold text-red-600">{historico.total}</TableCell>
                      <TableCell>
                        <Badge variant="default">{historico.status}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="calendario" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Calendário Fiscal</CardTitle>
              <CardDescription>Visualização dos vencimentos tributários</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    locale={ptBR}
                    className="rounded-md border"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold">Próximos Vencimentos</h3>
                  {obrigacoesFiscais
                    .filter((o) => o.status !== "Pago")
                    .sort((a, b) => new Date(a.vencimento).getTime() - new Date(b.vencimento).getTime())
                    .map((obrigacao) => (
                      <div key={obrigacao.id} className="p-3 border rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">{obrigacao.nome}</p>
                            <p className="text-sm text-gray-600">Vencimento: {obrigacao.vencimento}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold">{obrigacao.valor}</p>
                            <Badge
                              variant={obrigacao.diasVencimento <= 7 ? "destructive" : "secondary"}
                              className="text-xs"
                            >
                              {obrigacao.diasVencimento > 0 ? `${obrigacao.diasVencimento} dias` : "Vencido"}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function TaxForm() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Nome da Obrigação</Label>
        <Input placeholder="Ex: DAS, IRPJ, CSLL..." />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Tipo</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Selecione o tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mensal">Mensal</SelectItem>
              <SelectItem value="trimestral">Trimestral</SelectItem>
              <SelectItem value="anual">Anual</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Competência</Label>
          <Input placeholder="Ex: 01/2024" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Valor</Label>
          <Input placeholder="R$ 0,00" />
        </div>
        <div className="space-y-2">
          <Label>Data de Vencimento</Label>
          <Input type="date" />
        </div>
      </div>

      <div className="flex justify-end space-x-2">
        <Button variant="outline">Cancelar</Button>
        <Button>Cadastrar Obrigação</Button>
      </div>
    </div>
  )
}
