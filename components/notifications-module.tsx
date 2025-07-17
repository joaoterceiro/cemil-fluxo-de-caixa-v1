"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
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
import { Textarea } from "@/components/ui/textarea"
import { Bell, Plus, Mail, Smartphone, Settings, AlertTriangle, CheckCircle, Clock } from "lucide-react"

export function NotificationsModule() {
  const [activeTab, setActiveTab] = useState("recentes")

  const notificacoesRecentes = [
    {
      id: 1,
      tipo: "Alerta Crítico",
      titulo: "DAS vence em 2 dias",
      descricao: "Obrigação fiscal DAS - Simples Nacional vence em 20/01/2024",
      valor: "R$ 2.450,00",
      data: "2024-01-18 09:30",
      status: "Não Lida",
      prioridade: "Alta",
      canal: "Email + Push",
      icone: AlertTriangle,
      cor: "text-red-600",
    },
    {
      id: 2,
      tipo: "Pagamento Processado",
      titulo: "Pagamento realizado com sucesso",
      descricao: "Fornecedor XYZ - Pagamento de R$ 2.150,00 processado",
      valor: "R$ 2.150,00",
      data: "2024-01-18 08:45",
      status: "Lida",
      prioridade: "Média",
      canal: "Push",
      icone: CheckCircle,
      cor: "text-green-600",
    },
    {
      id: 3,
      tipo: "Meta Atingida",
      titulo: "Meta de receita mensal atingida",
      descricao: "Receita de janeiro atingiu 105% da meta estabelecida",
      valor: "R$ 210.000,00",
      data: "2024-01-18 07:15",
      status: "Lida",
      prioridade: "Baixa",
      canal: "Email",
      icone: CheckCircle,
      cor: "text-blue-600",
    },
    {
      id: 4,
      tipo: "Estoque Baixo",
      titulo: "Produto D com estoque crítico",
      descricao: "Apenas 5 unidades restantes - Reposição urgente necessária",
      valor: "5 unidades",
      data: "2024-01-17 16:20",
      status: "Não Lida",
      prioridade: "Alta",
      canal: "Email + SMS",
      icone: AlertTriangle,
      cor: "text-orange-600",
    },
  ]

  const configuracoes = [
    {
      categoria: "Financeiro",
      notificacoes: [
        {
          nome: "Vencimento de Impostos",
          descricao: "Alertas sobre vencimento de obrigações fiscais",
          email: true,
          push: true,
          sms: false,
          antecedencia: "3 dias",
        },
        {
          nome: "Pagamentos Processados",
          descricao: "Confirmação de pagamentos realizados",
          email: true,
          push: true,
          sms: false,
          antecedencia: "Imediato",
        },
        {
          nome: "Metas Financeiras",
          descricao: "Alertas sobre atingimento de metas",
          email: true,
          push: false,
          sms: false,
          antecedencia: "Diário",
        },
      ],
    },
    {
      categoria: "Operacional",
      notificacoes: [
        {
          nome: "Estoque Baixo",
          descricao: "Produtos com estoque abaixo do mínimo",
          email: true,
          push: true,
          sms: true,
          antecedencia: "Imediato",
        },
        {
          nome: "Folha de Pagamento",
          descricao: "Processamento da folha de pagamento",
          email: true,
          push: false,
          sms: false,
          antecedencia: "1 dia",
        },
      ],
    },
    {
      categoria: "Segurança",
      notificacoes: [
        {
          nome: "Login Suspeito",
          descricao: "Tentativas de acesso não autorizadas",
          email: true,
          push: true,
          sms: true,
          antecedencia: "Imediato",
        },
        {
          nome: "Alterações Críticas",
          descricao: "Modificações em dados sensíveis",
          email: true,
          push: true,
          sms: false,
          antecedencia: "Imediato",
        },
      ],
    },
  ]

  const templates = [
    {
      id: 1,
      nome: "Vencimento de Imposto",
      tipo: "Email",
      assunto: "⚠️ Imposto vence em {dias} dias",
      conteudo: "Olá {nome}, o imposto {tipo_imposto} no valor de {valor} vence em {data_vencimento}.",
      status: "Ativo",
      ultimoUso: "2024-01-18",
    },
    {
      id: 2,
      nome: "Pagamento Processado",
      tipo: "Push",
      assunto: "✅ Pagamento realizado",
      conteudo: "Pagamento de {valor} para {fornecedor} foi processado com sucesso.",
      status: "Ativo",
      ultimoUso: "2024-01-18",
    },
    {
      id: 3,
      nome: "Estoque Crítico",
      tipo: "SMS",
      assunto: "🚨 Estoque baixo",
      conteudo: "ALERTA: {produto} com apenas {quantidade} unidades. Reposição urgente!",
      status: "Ativo",
      ultimoUso: "2024-01-17",
    },
  ]

  const estatisticas = {
    totalEnviadas: 1247,
    emailsEnviados: 856,
    pushEnviados: 312,
    smsEnviados: 79,
    taxaAbertura: "78.5%",
    taxaClique: "23.2%",
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center">
            <Bell className="h-8 w-8 mr-3 text-blue-600" />
            Central de Notificações
          </h2>
          <p className="text-gray-500">Gestão completa de alertas e comunicações</p>
        </div>
        <div className="flex items-center space-x-2 mt-3 md:mt-0">
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Configurações
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Nova Notificação
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Criar Notificação</DialogTitle>
                <DialogDescription>Configure uma nova notificação personalizada</DialogDescription>
              </DialogHeader>
              <NotificationForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Enviadas</CardTitle>
            <Bell className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{estatisticas.totalEnviadas.toLocaleString()}</div>
            <p className="text-xs text-gray-500">este mês</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Emails</CardTitle>
            <Mail className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{estatisticas.emailsEnviados}</div>
            <p className="text-xs text-gray-500">emails enviados</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Push</CardTitle>
            <Smartphone className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">{estatisticas.pushEnviados}</div>
            <p className="text-xs text-gray-500">notificações push</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">SMS</CardTitle>
            <Smartphone className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{estatisticas.smsEnviados}</div>
            <p className="text-xs text-gray-500">SMS enviados</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taxa Abertura</CardTitle>
            <CheckCircle className="h-4 w-4 text-indigo-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-indigo-600">{estatisticas.taxaAbertura}</div>
            <p className="text-xs text-gray-500">emails abertos</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taxa Clique</CardTitle>
            <Clock className="h-4 w-4 text-teal-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-teal-600">{estatisticas.taxaClique}</div>
            <p className="text-xs text-gray-500">links clicados</p>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-2">
          <TabsTrigger value="recentes">Recentes</TabsTrigger>
          <TabsTrigger value="configuracoes">Configurações</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="historico">Histórico</TabsTrigger>
        </TabsList>

        <TabsContent value="recentes" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notificações Recentes</CardTitle>
              <CardDescription>Últimas notificações enviadas e recebidas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notificacoesRecentes.map((notificacao) => (
                  <div
                    key={notificacao.id}
                    className="flex flex-col sm:flex-row items-start space-x-4 p-4 border rounded-lg"
                  >
                    <div className={`p-2 rounded-full bg-gray-100 ${notificacao.cor}`}>
                      <notificacao.icone className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900">{notificacao.titulo}</h3>
                          <p className="text-sm text-gray-600 mt-1">{notificacao.descricao}</p>
                          <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                            <span>{notificacao.data}</span>
                            <span>Valor: {notificacao.valor}</span>
                            <span>Canal: {notificacao.canal}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 mt-2 sm:mt-0">
                          <Badge
                            variant={
                              notificacao.prioridade === "Alta"
                                ? "destructive"
                                : notificacao.prioridade === "Média"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {notificacao.prioridade}
                          </Badge>
                          <Badge variant={notificacao.status === "Não Lida" ? "default" : "outline"}>
                            {notificacao.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="configuracoes" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Configurações de Notificação</CardTitle>
              <CardDescription>Configure quando e como receber notificações</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {configuracoes.map((categoria, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="font-semibold text-lg text-gray-900">{categoria.categoria}</h3>
                    <div className="space-y-4">
                      {categoria.notificacoes.map((notif, notifIndex) => (
                        <div key={notifIndex} className="p-4 border rounded-lg">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="font-medium text-gray-900">{notif.nome}</h4>
                              <p className="text-sm text-gray-600">{notif.descricao}</p>
                            </div>
                            <Badge variant="outline">{notif.antecedencia}</Badge>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="flex items-center space-x-2">
                              <Switch checked={notif.email} />
                              <Mail className="h-4 w-4 text-gray-400" />
                              <span className="text-sm">Email</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Switch checked={notif.push} />
                              <Bell className="h-4 w-4 text-gray-400" />
                              <span className="text-sm">Push</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Switch checked={notif.sms} />
                              <Smartphone className="h-4 w-4 text-gray-400" />
                              <span className="text-sm">SMS</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Templates de Notificação</CardTitle>
              <CardDescription>Gerencie templates personalizados para diferentes tipos de notificação</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Assunto</TableHead>
                    <TableHead>Conteúdo</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Último Uso</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {templates.map((template) => (
                    <TableRow key={template.id}>
                      <TableCell className="font-medium">{template.nome}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{template.tipo}</Badge>
                      </TableCell>
                      <TableCell className="max-w-xs truncate">{template.assunto}</TableCell>
                      <TableCell className="max-w-xs truncate">{template.conteudo}</TableCell>
                      <TableCell>
                        <Badge variant={template.status === "Ativo" ? "default" : "secondary"}>{template.status}</Badge>
                      </TableCell>
                      <TableCell>{template.ultimoUso}</TableCell>
                      <TableCell>
                        <div className="flex space-x-1">
                          <Button variant="ghost" size="sm">
                            Editar
                          </Button>
                          <Button variant="ghost" size="sm">
                            Testar
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

        <TabsContent value="historico" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Histórico de Notificações</CardTitle>
              <CardDescription>Registro completo de todas as notificações enviadas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-2">
                  <Select>
                    <SelectTrigger className="w-full md:w-48">
                      <SelectValue placeholder="Filtrar por tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todos">Todos os Tipos</SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="push">Push</SelectItem>
                      <SelectItem value="sms">SMS</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-full md:w-48">
                      <SelectValue placeholder="Período" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hoje">Hoje</SelectItem>
                      <SelectItem value="semana">Esta Semana</SelectItem>
                      <SelectItem value="mes">Este Mês</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <Bell className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Histórico detalhado seria exibido aqui</p>
                    <p className="text-sm text-gray-400">Com filtros, busca e exportação</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function NotificationForm() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Título da Notificação</Label>
        <Input placeholder="Ex: Vencimento de imposto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Tipo</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Selecione o tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="alerta">Alerta</SelectItem>
              <SelectItem value="informativo">Informativo</SelectItem>
              <SelectItem value="confirmacao">Confirmação</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Prioridade</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Selecione a prioridade" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="baixa">Baixa</SelectItem>
              <SelectItem value="media">Média</SelectItem>
              <SelectItem value="alta">Alta</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label>Mensagem</Label>
        <Textarea placeholder="Conteúdo da notificação..." />
      </div>

      <div className="space-y-2">
        <Label>Canais de Envio</Label>
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4">
          <div className="flex items-center space-x-2">
            <Switch />
            <Mail className="h-4 w-4" />
            <span className="text-sm">Email</span>
          </div>
          <div className="flex items-center space-x-2">
            <Switch />
            <Bell className="h-4 w-4" />
            <span className="text-sm">Push</span>
          </div>
          <div className="flex items-center space-x-2">
            <Switch />
            <Smartphone className="h-4 w-4" />
            <span className="text-sm">SMS</span>
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-2">
        <Button variant="outline">Cancelar</Button>
        <Button>Criar Notificação</Button>
      </div>
    </div>
  )
}
