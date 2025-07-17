"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
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
import { Package, Plus, TrendingDown, TrendingUp, AlertTriangle, BarChart3 } from "lucide-react"

export function InventoryFinancialModule() {
  const estoqueFinanceiro = [
    {
      id: 1,
      produto: "Produto A",
      categoria: "Eletrônicos",
      quantidade: 150,
      valorUnitario: "R$ 250,00",
      valorTotal: "R$ 37.500,00",
      custoMedio: "R$ 200,00",
      margem: "25%",
      giro: 4.2,
      diasEstoque: 87,
      status: "Normal",
    },
    {
      id: 2,
      produto: "Produto B",
      categoria: "Roupas",
      quantidade: 80,
      valorUnitario: "R$ 120,00",
      valorTotal: "R$ 9.600,00",
      custoMedio: "R$ 85,00",
      margem: "41.2%",
      giro: 6.8,
      diasEstoque: 54,
      status: "Normal",
    },
    {
      id: 3,
      produto: "Produto C",
      categoria: "Casa",
      quantidade: 25,
      valorUnitario: "R$ 450,00",
      valorTotal: "R$ 11.250,00",
      custoMedio: "R$ 380,00",
      margem: "18.4%",
      giro: 2.1,
      diasEstoque: 174,
      status: "Parado",
    },
    {
      id: 4,
      produto: "Produto D",
      categoria: "Eletrônicos",
      quantidade: 5,
      valorUnitario: "R$ 800,00",
      valorTotal: "R$ 4.000,00",
      custoMedio: "R$ 650,00",
      margem: "23.1%",
      giro: 8.5,
      diasEstoque: 43,
      status: "Baixo",
    },
  ]

  const analiseABC = [
    {
      classe: "A",
      produtos: 12,
      percentualProdutos: "20%",
      valorEstoque: "R$ 180.000,00",
      percentualValor: "72%",
      giroMedio: 6.2,
      status: "Excelente",
    },
    {
      classe: "B",
      produtos: 24,
      percentualProdutos: "40%",
      valorEstoque: "R$ 45.000,00",
      percentualValor: "18%",
      giroMedio: 3.8,
      status: "Bom",
    },
    {
      classe: "C",
      produtos: 24,
      percentualProdutos: "40%",
      valorEstoque: "R$ 25.000,00",
      percentualValor: "10%",
      giroMedio: 1.5,
      status: "Atenção",
    },
  ]

  const indicadoresEstoque = {
    valorTotalEstoque: "R$ 250.000,00",
    giroMedio: 4.8,
    diasEstoqueMedio: 76,
    margemMedia: "28.5%",
    produtosParados: 8,
    produtosBaixoEstoque: 12,
  }

  const movimentacaoFinanceira = [
    {
      data: "2024-01-15",
      tipo: "Entrada",
      produto: "Produto A",
      quantidade: 50,
      valorUnitario: "R$ 200,00",
      valorTotal: "R$ 10.000,00",
      fornecedor: "Fornecedor Alpha",
      impactoFluxo: "Saída",
    },
    {
      data: "2024-01-14",
      tipo: "Saída",
      produto: "Produto B",
      quantidade: 30,
      valorUnitario: "R$ 120,00",
      valorTotal: "R$ 3.600,00",
      fornecedor: "Cliente XYZ",
      impactoFluxo: "Entrada",
    },
    {
      data: "2024-01-13",
      tipo: "Ajuste",
      produto: "Produto C",
      quantidade: -5,
      valorUnitario: "R$ 450,00",
      valorTotal: "R$ -2.250,00",
      fornecedor: "Perda/Avaria",
      impactoFluxo: "Perda",
    },
  ]

  const projecaoEstoque = [
    {
      produto: "Produto A",
      estoqueAtual: 150,
      vendaMedia: 35,
      diasRestantes: 4.3,
      proximaCompra: "2024-01-20",
      valorCompra: "R$ 7.000,00",
      status: "Programado",
    },
    {
      produto: "Produto B",
      estoqueAtual: 80,
      vendaMedia: 15,
      diasRestantes: 5.3,
      proximaCompra: "2024-01-22",
      valorCompra: "R$ 4.250,00",
      status: "Programado",
    },
    {
      produto: "Produto D",
      estoqueAtual: 5,
      vendaMedia: 8,
      diasRestantes: 0.6,
      proximaCompra: "2024-01-16",
      valorCompra: "R$ 5.200,00",
      status: "Urgente",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center">
            <Package className="h-8 w-8 mr-3 text-blue-600" />
            Estoque Financeiro
          </h2>
          <p className="text-gray-500">Gestão financeira integrada do estoque</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="mt-3 md:mt-0">
              <Plus className="h-4 w-4 mr-2" />
              Novo Produto
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Cadastrar Produto</DialogTitle>
              <DialogDescription>Adicione um novo produto ao estoque</DialogDescription>
            </DialogHeader>
            <ProductForm />
          </DialogContent>
        </Dialog>
      </div>

      {/* Indicadores Principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Valor Total</CardTitle>
            <Package className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{indicadoresEstoque.valorTotalEstoque}</div>
            <p className="text-xs text-gray-500">estoque atual</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Giro Médio</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{indicadoresEstoque.giroMedio}x</div>
            <p className="text-xs text-gray-500">por ano</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Dias Estoque</CardTitle>
            <BarChart3 className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{indicadoresEstoque.diasEstoqueMedio}</div>
            <p className="text-xs text-gray-500">dias médios</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Margem Média</CardTitle>
            <TrendingUp className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">{indicadoresEstoque.margemMedia}</div>
            <p className="text-xs text-gray-500">margem bruta</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Produtos Parados</CardTitle>
            <TrendingDown className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{indicadoresEstoque.produtosParados}</div>
            <p className="text-xs text-gray-500">sem movimento</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Baixo Estoque</CardTitle>
            <AlertTriangle className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{indicadoresEstoque.produtosBaixoEstoque}</div>
            <p className="text-xs text-gray-500">requer reposição</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="estoque" className="space-y-4">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          <TabsTrigger value="estoque">Estoque Atual</TabsTrigger>
          <TabsTrigger value="abc">Análise ABC</TabsTrigger>
          <TabsTrigger value="movimentacao">Movimentação</TabsTrigger>
          <TabsTrigger value="projecao">Projeção</TabsTrigger>
          <TabsTrigger value="impacto">Impacto Financeiro</TabsTrigger>
        </TabsList>

        <TabsContent value="estoque" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Estoque Atual</CardTitle>
              <CardDescription>Visão financeira completa do estoque</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Produto</TableHead>
                    <TableHead>Categoria</TableHead>
                    <TableHead>Quantidade</TableHead>
                    <TableHead>Valor Unit.</TableHead>
                    <TableHead>Valor Total</TableHead>
                    <TableHead>Margem</TableHead>
                    <TableHead>Giro</TableHead>
                    <TableHead>Dias Estoque</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {estoqueFinanceiro.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.produto}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{item.categoria}</Badge>
                      </TableCell>
                      <TableCell>{item.quantidade}</TableCell>
                      <TableCell>{item.valorUnitario}</TableCell>
                      <TableCell className="font-semibold text-blue-600">{item.valorTotal}</TableCell>
                      <TableCell className="text-green-600">{item.margem}</TableCell>
                      <TableCell>{item.giro}x</TableCell>
                      <TableCell>{item.diasEstoque} dias</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            item.status === "Normal" ? "default" : item.status === "Baixo" ? "secondary" : "destructive"
                          }
                        >
                          {item.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="abc" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Análise ABC</CardTitle>
              <CardDescription>Classificação dos produtos por importância financeira</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {analiseABC.map((classe, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                            classe.classe === "A"
                              ? "bg-green-500"
                              : classe.classe === "B"
                                ? "bg-yellow-500"
                                : "bg-red-500"
                          }`}
                        >
                          {classe.classe}
                        </div>
                        <div>
                          <h3 className="font-semibold">Classe {classe.classe}</h3>
                          <p className="text-sm text-gray-600">
                            {classe.produtos} produtos ({classe.percentualProdutos})
                          </p>
                        </div>
                      </div>
                      <Badge
                        variant={
                          classe.status === "Excelente"
                            ? "default"
                            : classe.status === "Bom"
                              ? "secondary"
                              : "destructive"
                        }
                      >
                        {classe.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Valor do Estoque</p>
                        <p className="font-semibold text-blue-600">{classe.valorEstoque}</p>
                        <p className="text-xs text-gray-500">{classe.percentualValor} do total</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Giro Médio</p>
                        <p className="font-semibold text-green-600">{classe.giroMedio}x</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Participação</p>
                        <Progress value={Number.parseInt(classe.percentualValor)} className="h-2 mt-1" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="movimentacao" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Movimentação Financeira</CardTitle>
              <CardDescription>Impacto das movimentações de estoque no fluxo de caixa</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Data</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Produto</TableHead>
                    <TableHead>Quantidade</TableHead>
                    <TableHead>Valor Unit.</TableHead>
                    <TableHead>Valor Total</TableHead>
                    <TableHead>Origem/Destino</TableHead>
                    <TableHead>Impacto Fluxo</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {movimentacaoFinanceira.map((mov, index) => (
                    <TableRow key={index}>
                      <TableCell>{mov.data}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            mov.tipo === "Entrada" ? "default" : mov.tipo === "Saída" ? "secondary" : "destructive"
                          }
                        >
                          {mov.tipo}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-medium">{mov.produto}</TableCell>
                      <TableCell>{mov.quantidade}</TableCell>
                      <TableCell>{mov.valorUnitario}</TableCell>
                      <TableCell className="font-semibold">{mov.valorTotal}</TableCell>
                      <TableCell>{mov.fornecedor}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            mov.impactoFluxo === "Entrada"
                              ? "default"
                              : mov.impactoFluxo === "Saída"
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {mov.impactoFluxo}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="projecao" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Projeção de Compras</CardTitle>
              <CardDescription>Planejamento financeiro para reposição de estoque</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Produto</TableHead>
                    <TableHead>Estoque Atual</TableHead>
                    <TableHead>Venda Média/Dia</TableHead>
                    <TableHead>Dias Restantes</TableHead>
                    <TableHead>Próxima Compra</TableHead>
                    <TableHead>Valor Compra</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {projecaoEstoque.map((proj, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{proj.produto}</TableCell>
                      <TableCell>{proj.estoqueAtual}</TableCell>
                      <TableCell>{proj.vendaMedia}</TableCell>
                      <TableCell>
                        <span className={proj.diasRestantes < 1 ? "text-red-600 font-semibold" : ""}>
                          {proj.diasRestantes} dias
                        </span>
                      </TableCell>
                      <TableCell>{proj.proximaCompra}</TableCell>
                      <TableCell className="font-semibold text-red-600">{proj.valorCompra}</TableCell>
                      <TableCell>
                        <Badge variant={proj.status === "Urgente" ? "destructive" : "default"}>{proj.status}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="impacto" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Impacto Financeiro do Estoque</CardTitle>
              <CardDescription>Análise do impacto do estoque no resultado financeiro</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold">Custos do Estoque</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Custo de Armazenagem</span>
                      <span className="font-medium text-red-600">R$ 5.200,00/mês</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Custo de Oportunidade</span>
                      <span className="font-medium text-red-600">R$ 3.125,00/mês</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Perdas e Avarias</span>
                      <span className="font-medium text-red-600">R$ 1.850,00/mês</span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span className="font-semibold">Total Custos</span>
                      <span className="font-semibold text-red-600">R$ 10.175,00/mês</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold">Benefícios do Estoque</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Margem Bruta Realizada</span>
                      <span className="font-medium text-green-600">R$ 71.250,00/mês</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Economia em Compras</span>
                      <span className="font-medium text-green-600">R$ 8.500,00/mês</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Disponibilidade de Produto</span>
                      <span className="font-medium text-green-600">R$ 12.000,00/mês</span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span className="font-semibold">Total Benefícios</span>
                      <span className="font-semibold text-green-600">R$ 91.750,00/mês</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-lg">Resultado Líquido do Estoque</span>
                  <span className="font-bold text-xl text-blue-600">R$ 81.575,00/mês</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  ROI do Estoque: 32.6% (Benefícios - Custos / Valor do Estoque)
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function ProductForm() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Nome do Produto</Label>
          <Input placeholder="Nome do produto" />
        </div>
        <div className="space-y-2">
          <Label>Categoria</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Selecione o tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="eletronicos">Eletrônicos</SelectItem>
              <SelectItem value="roupas">Roupas</SelectItem>
              <SelectItem value="casa">Casa</SelectItem>
              <SelectItem value="esporte">Esporte</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label>Quantidade Inicial</Label>
          <Input type="number" placeholder="0" />
        </div>
        <div className="space-y-2">
          <Label>Custo Unitário</Label>
          <Input placeholder="R$ 0,00" />
        </div>
        <div className="space-y-2">
          <Label>Preço de Venda</Label>
          <Input placeholder="R$ 0,00" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Estoque Mínimo</Label>
          <Input type="number" placeholder="0" />
        </div>
        <div className="space-y-2">
          <Label>Estoque Máximo</Label>
          <Input type="number" placeholder="0" />
        </div>
      </div>

      <div className="flex justify-end space-x-2">
        <Button variant="outline">Cancelar</Button>
        <Button>Cadastrar Produto</Button>
      </div>
    </div>
  )
}
