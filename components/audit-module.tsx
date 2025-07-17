"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Shield, Search, Filter, Eye, Download, AlertTriangle, CheckCircle, Clock } from "lucide-react"

export function AuditModule() {
  const logsAuditoria = [
    {
      id: 1,
      data: "2024-01-15 14:30:25",
      usuario: "João Silva",
      acao: "Criação de Transação",
      modulo: "Entradas",
      detalhes: "Nova receita - Cliente ABC Ltda - R$ 5.430,00",
      ip: "192.168.1.100",
      status: "Sucesso",
      risco: "Baixo",
    },
    {
      id: 2,
      data: "2024-01-15 14:25:10",
      usuario: "Maria Santos",
      acao: "Alteração de Pagamento",
      modulo: "Pagamentos",
      detalhes: "Modificação valor pagamento - R$ 2.150,00 para R$ 2.350,00",
      ip: "192.168.1.105",
      status: "Sucesso",
      risco: "Médio",
    },
    {
      id: 3,
      data: "2024-01-15 14:20:45",
      usuario: "Pedro Costa",
      acao: "Tentativa de Acesso",
      modulo: "Sistema",
      detalhes: "Tentativa de login com credenciais inválidas",
      ip: "192.168.1.110",
      status: "Falha",
      risco: "Alto",
    },
    {
      id: 4,
      data: "2024-01-15 14:15:30",
      usuario: "Ana Oliveira",
      acao: "Exclusão de Registro",
      modulo: "Fornecedores",
      detalhes: "Exclusão fornecedor - Gamma Materiais",
      ip: "192.168.1.108",
      status: "Sucesso",
      risco: "Alto",
    },
    {
      id: 5,
      data: "2024-01-15 14:10:15",
      usuario: "Carlos Lima",
      acao: "Geração de Relatório",
      modulo: "Relatórios",
      detalhes: "Relatório DRE - Janeiro 2024",
      ip: "192.168.1.102",
      status: "Sucesso",
      risco: "Baixo",
    },
  ]

  const alertasSeguranca = [
    {
      id: 1,
      tipo: "Acesso Suspeito",
      descricao: "Múltiplas tentativas de login falharam para usuário admin",
      data: "2024-01-15 14:20:45",
      gravidade: "Alta",
      status: "Ativo",
      origem: "192.168.1.110",
    },
    {
      id: 2,
      tipo: "Alteração Crítica",
      descricao: "Modificação em lote de valores de pagamento",
      data: "2024-01-15 13:45:20",
      gravidade: "Média",
      status: "Investigando",
      origem: "192.168.1.105",
    },
    {
      id: 3,
      tipo: "Acesso Fora do Horário",
      descricao: "Login realizado fora do horário comercial",
      data: "2024-01-14 22:30:15",
      gravidade: "Baixa",
      status: "Resolvido",
      origem: "192.168.1.100",
    },
  ]

  const relatoriosCompliance = [
    {
      nome: "Relatório de Conformidade LGPD",
      descricao: "Análise de conformidade com Lei Geral de Proteção de Dados",
      ultimaGeracao: "2024-01-01",
      status: "Conforme",
      proximaRevisao: "2024-04-01",
    },
    {
      nome: "Auditoria Interna - Q4 2023",
      descricao: "Relatório completo de auditoria interna do último trimestre",
      ultimaGeracao: "2024-01-05",
      status: "Pendente",
      proximaRevisao: "2024-01-20",
    },
    {
      nome: "Controles Internos SOX",
      descricao: "Avaliação dos controles internos conforme Sarbanes-Oxley",
      ultimaGeracao: "2023-12-31",
      status: "Conforme",
      proximaRevisao: "2024-03-31",
    },
  ]

  const metricas = {
    totalLogs: 1247,
    logsSemana: 89,
    alertasAtivos: 3,
    usuariosAtivos: 15,
    tentativasLogin: 156,
    loginsFalha: 8,
  }

  const atividades = [
    {
      usuario: "João Silva",
      totalAcoes: 45,
      ultimoAcesso: "2024-01-15 14:30",
      moduloMaisUsado: "Dashboard",
      risco: "Baixo",
    },
    {
      usuario: "Maria Santos",
      totalAcoes: 38,
      ultimoAcesso: "2024-01-15 14:25",
      moduloMaisUsado: "Pagamentos",
      risco: "Médio",
    },
    {
      usuario: "Pedro Costa",
      totalAcoes: 12,
      ultimoAcesso: "2024-01-15 14:20",
      moduloMaisUsado: "Relatórios",
      risco: "Alto",
    },
    {
      usuario: "Ana Oliveira",
      totalAcoes: 28,
      ultimoAcesso: "2024-01-15 14:15",
      moduloMaisUsado: "Fornecedores",
      risco: "Baixo",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 flex items-center">
            <Shield className="h-8 w-8 mr-3 text-red-600" />
            Auditoria e Compliance
          </h2>
          <p className="text-gray-500">Monitoramento, logs e conformidade regulatória</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <Input placeholder="Buscar logs..." className="pl-8 w-64" />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </Button>
        </div>
      </div>

      {/* Métricas de Segurança */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Logs</CardTitle>
            <Shield className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metricas.totalLogs.toLocaleString()}</div>
            <p className="text-xs text-gray-500">registros totais</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Esta Semana</CardTitle>
            <Clock className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{metricas.logsSemana}</div>
            <p className="text-xs text-gray-500">novos logs</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Alertas Ativos</CardTitle>
            <AlertTriangle className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{metricas.alertasAtivos}</div>
            <p className="text-xs text-gray-500">requerem atenção</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Usuários Ativos</CardTitle>
            <CheckCircle className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">{metricas.usuariosAtivos}</div>
            <p className="text-xs text-gray-500">usuários online</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Logins Hoje</CardTitle>
            <Eye className="h-4 w-4 text-indigo-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-indigo-600">{metricas.tentativasLogin}</div>
            <p className="text-xs text-gray-500">tentativas totais</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Falhas Login</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{metricas.loginsFalha}</div>
            <p className="text-xs text-gray-500">tentativas falharam</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="logs" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="logs">Logs de Auditoria</TabsTrigger>
          <TabsTrigger value="alertas">Alertas de Segurança</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
          <TabsTrigger value="atividades">Atividades dos Usuários</TabsTrigger>
        </TabsList>

        <TabsContent value="logs" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Logs de Auditoria</CardTitle>
              <CardDescription>Registro completo de todas as ações realizadas no sistema</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 mb-4">
                <Select>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filtrar por módulo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos os Módulos</SelectItem>
                    <SelectItem value="entradas">Entradas</SelectItem>
                    <SelectItem value="pagamentos">Pagamentos</SelectItem>
                    <SelectItem value="sistema">Sistema</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Nível de risco" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos os Níveis</SelectItem>
                    <SelectItem value="baixo">Baixo</SelectItem>
                    <SelectItem value="medio">Médio</SelectItem>
                    <SelectItem value="alto">Alto</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Data/Hora</TableHead>
                    <TableHead>Usuário</TableHead>
                    <TableHead>Ação</TableHead>
                    <TableHead>Módulo</TableHead>
                    <TableHead>Detalhes</TableHead>
                    <TableHead>IP</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Risco</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {logsAuditoria.map((log) => (
                    <TableRow key={log.id}>
                      <TableCell className="text-sm">{log.data}</TableCell>
                      <TableCell className="font-medium">{log.usuario}</TableCell>
                      <TableCell>{log.acao}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{log.modulo}</Badge>
                      </TableCell>
                      <TableCell className="max-w-xs truncate">{log.detalhes}</TableCell>
                      <TableCell className="text-sm text-gray-500">{log.ip}</TableCell>
                      <TableCell>
                        <Badge variant={log.status === "Sucesso" ? "default" : "destructive"}>{log.status}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            log.risco === "Baixo" ? "default" : log.risco === "Médio" ? "secondary" : "destructive"
                          }
                        >
                          {log.risco}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="alertas" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Alertas de Segurança</CardTitle>
              <CardDescription>Eventos que requerem atenção da equipe de segurança</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {alertasSeguranca.map((alerta) => (
                  <div
                    key={alerta.id}
                    className={`p-4 rounded-lg border-l-4 ${
                      alerta.gravidade === "Alta"
                        ? "border-red-500 bg-red-50"
                        : alerta.gravidade === "Média"
                          ? "border-orange-500 bg-orange-50"
                          : "border-yellow-500 bg-yellow-50"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold text-gray-900">{alerta.tipo}</h3>
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
                        <p className="text-sm text-gray-600 mb-2">{alerta.descricao}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <span>Data: {alerta.data}</span>
                          <span>Origem: {alerta.origem}</span>
                        </div>
                      </div>
                      <Badge
                        variant={
                          alerta.status === "Ativo"
                            ? "destructive"
                            : alerta.status === "Investigando"
                              ? "secondary"
                              : "default"
                        }
                      >
                        {alerta.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="compliance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Relatórios de Compliance</CardTitle>
              <CardDescription>Status de conformidade regulatória e auditoria</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {relatoriosCompliance.map((relatorio, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900">{relatorio.nome}</h3>
                        <p className="text-sm text-gray-600">{relatorio.descricao}</p>
                      </div>
                      <Badge variant={relatorio.status === "Conforme" ? "default" : "secondary"}>
                        {relatorio.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Última Geração</p>
                        <p className="font-medium">{relatorio.ultimaGeracao}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Próxima Revisão</p>
                        <p className="font-medium">{relatorio.proximaRevisao}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="atividades" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Atividades dos Usuários</CardTitle>
              <CardDescription>Monitoramento de atividades e comportamento dos usuários</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Usuário</TableHead>
                    <TableHead>Total de Ações</TableHead>
                    <TableHead>Último Acesso</TableHead>
                    <TableHead>Módulo Mais Usado</TableHead>
                    <TableHead>Nível de Risco</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {atividades.map((atividade, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{atividade.usuario}</TableCell>
                      <TableCell>{atividade.totalAcoes}</TableCell>
                      <TableCell>{atividade.ultimoAcesso}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{atividade.moduloMaisUsado}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            atividade.risco === "Baixo"
                              ? "default"
                              : atividade.risco === "Médio"
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {atividade.risco}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
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
