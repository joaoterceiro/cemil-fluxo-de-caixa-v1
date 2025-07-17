"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DollarSign, CreditCard, Users, Building2, Calendar, Download } from "lucide-react"
import { DashboardOverview } from "@/components/dashboard-overview"
import { TransactionModule } from "@/components/transaction-module"
import { PayrollModule } from "@/components/payroll-module"
import { BankAccountsModule } from "@/components/bank-accounts-module"
import { ReportsModule } from "@/components/reports-module"
import { PaymentsModule } from "@/components/payments-module"

// Adicionar novos imports para os módulos expandidos
import { BudgetModule } from "@/components/budget-module"
import { CostCenterModule } from "@/components/cost-center-module"
import { InvestmentModule } from "@/components/investment-module"
import { ClientSupplierModule } from "@/components/client-supplier-module"
import { AuditModule } from "@/components/audit-module"
import { ExecutiveDashboard } from "@/components/executive-dashboard"
import { TaxModule } from "@/components/tax-module"
import { InventoryFinancialModule } from "@/components/inventory-financial-module"
import { NotificationsModule } from "@/components/notifications-module"

// Adicionar novos ícones
import {
  Target,
  Building,
  TrendingUpIcon,
  Users2,
  Shield,
  Crown,
  BarChart,
  FileText,
  Package,
  Bell,
} from "lucide-react"

export default function CashFlowSystem() {
  const [activeTab, setActiveTab] = useState("dashboard")

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Building2 className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">FluxoCaixa Pro</h1>
              <p className="text-sm text-gray-500">Sistema de Controle Financeiro</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="outline" className="text-green-600 border-green-600">
              Online
            </Badge>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Exportar
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        <nav className="w-64 bg-white border-r border-gray-200 min-h-screen p-4">
          <div className="space-y-2">
            <Button
              variant={activeTab === "dashboard" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("dashboard")}
            >
              <TrendingUpIcon className="h-4 w-4 mr-2" />
              Dashboard
            </Button>
            <Button
              variant={activeTab === "transactions" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("transactions")}
            >
              <DollarSign className="h-4 w-4 mr-2" />
              Entradas/Saídas
            </Button>
            <Button
              variant={activeTab === "payroll" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("payroll")}
            >
              <Users className="h-4 w-4 mr-2" />
              Folha de Pagamento
            </Button>
            <Button
              variant={activeTab === "banks" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("banks")}
            >
              <CreditCard className="h-4 w-4 mr-2" />
              Contas Bancárias
            </Button>
            <Button
              variant={activeTab === "payments" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("payments")}
            >
              <Calendar className="h-4 w-4 mr-2" />
              Pagamentos
            </Button>
            <Button
              variant={activeTab === "reports" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("reports")}
            >
              <TrendingUpIcon className="h-4 w-4 mr-2" />
              Relatórios
            </Button>
            <Button
              variant={activeTab === "executive" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("executive")}
            >
              <Crown className="h-4 w-4 mr-2" />
              Dashboard Executivo
            </Button>
            <Button
              variant={activeTab === "budget" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("budget")}
            >
              <Target className="h-4 w-4 mr-2" />
              Orçamento
            </Button>
            <Button
              variant={activeTab === "costcenter" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("costcenter")}
            >
              <Building className="h-4 w-4 mr-2" />
              Centro de Custos
            </Button>
            <Button
              variant={activeTab === "investments" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("investments")}
            >
              <BarChart className="h-4 w-4 mr-2" />
              Investimentos
            </Button>
            <Button
              variant={activeTab === "clients" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("clients")}
            >
              <Users2 className="h-4 w-4 mr-2" />
              Clientes/Fornecedores
            </Button>
            <Button
              variant={activeTab === "audit" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("audit")}
            >
              <Shield className="h-4 w-4 mr-2" />
              Auditoria
            </Button>
            <Button
              variant={activeTab === "tax" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("tax")}
            >
              <FileText className="h-4 w-4 mr-2" />
              Gestão Tributária
            </Button>
            <Button
              variant={activeTab === "inventory" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("inventory")}
            >
              <Package className="h-4 w-4 mr-2" />
              Estoque Financeiro
            </Button>
            <Button
              variant={activeTab === "notifications" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab("notifications")}
            >
              <Bell className="h-4 w-4 mr-2" />
              Notificações
            </Button>
          </div>
        </nav>

        <main className="flex-1 p-6">
          {activeTab === "dashboard" && <DashboardOverview />}
          {activeTab === "transactions" && <TransactionModule />}
          {activeTab === "payroll" && <PayrollModule />}
          {activeTab === "banks" && <BankAccountsModule />}
          {activeTab === "payments" && <PaymentsModule />}
          {activeTab === "reports" && <ReportsModule />}
          {activeTab === "executive" && <ExecutiveDashboard />}
          {activeTab === "budget" && <BudgetModule />}
          {activeTab === "costcenter" && <CostCenterModule />}
          {activeTab === "investments" && <InvestmentModule />}
          {activeTab === "clients" && <ClientSupplierModule />}
          {activeTab === "audit" && <AuditModule />}
          {activeTab === "tax" && <TaxModule />}
          {activeTab === "inventory" && <InventoryFinancialModule />}
          {activeTab === "notifications" && <NotificationsModule />}
        </main>
      </div>
    </div>
  )
}
