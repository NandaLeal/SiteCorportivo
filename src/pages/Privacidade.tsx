import { Shield, Eye, Lock, UserCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Privacidade() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 sm:py-32">
          <div className="absolute inset-0 bg-gradient-hero opacity-10" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
                Política de Privacidade
              </h1>
              <p className="text-lg leading-8 text-muted-foreground">
                Seu direito à privacidade e proteção de dados é nossa prioridade
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Overview */}
        <section className="py-24 bg-gradient-elegant">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-8">
                Compromisso com sua Privacidade
              </h2>
              <p className="text-lg text-muted-foreground">
                A Distribuidora de Bebidas Cervantes está comprometida em proteger 
                suas informações pessoais de acordo com a Lei Geral de Proteção de 
                Dados (LGPD) e melhores práticas de segurança.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center shadow-card hover:shadow-elegant transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="rounded-full bg-primary/10 p-3 w-fit mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Proteção</h3>
                  <p className="text-sm text-muted-foreground">
                    Dados protegidos com tecnologia de segurança
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center shadow-card hover:shadow-elegant transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="rounded-full bg-secondary/10 p-3 w-fit mx-auto mb-4">
                    <Eye className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-semibold mb-2">Transparência</h3>
                  <p className="text-sm text-muted-foreground">
                    Uso claro e transparente dos seus dados
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center shadow-card hover:shadow-elegant transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="rounded-full bg-accent/10 p-3 w-fit mx-auto mb-4">
                    <Lock className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Confidencialidade</h3>
                  <p className="text-sm text-muted-foreground">
                    Informações mantidas em absoluto sigilo
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center shadow-card hover:shadow-elegant transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="rounded-full bg-primary-light/10 p-3 w-fit mx-auto mb-4">
                    <UserCheck className="h-8 w-8 text-primary-light" />
                  </div>
                  <h3 className="font-semibold mb-2">Controle</h3>
                  <p className="text-sm text-muted-foreground">
                    Você tem controle sobre seus dados
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Detailed Policy */}
        <section className="py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="space-y-12">
              
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle>1. Coleta de Dados</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Coletamos apenas os dados necessários para prestar nossos serviços, incluindo:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Informações de contato (nome, e-mail, telefone)</li>
                    <li>Dados comerciais para relacionamento B2B</li>
                    <li>Informações de localização para entrega</li>
                    <li>Histórico de interações para melhorar o atendimento</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle>2. Uso dos Dados</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Utilizamos seus dados exclusivamente para:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Processar pedidos e entregas</li>
                    <li>Comunicação comercial e suporte ao cliente</li>
                    <li>Melhorar nossos serviços e experiência do usuário</li>
                    <li>Cumprir obrigações legais e regulamentares</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle>3. Compartilhamento de Dados</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Seus dados não são vendidos ou compartilhados com terceiros, exceto:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Com a Ambev, nossa parceira comercial, para fins operacionais</li>
                    <li>Com prestadores de serviço sob contrato de confidencialidade</li>
                    <li>Quando exigido por lei ou autoridades competentes</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle>4. Segurança dos Dados</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Implementamos medidas técnicas e organizacionais para proteger seus dados:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Criptografia de dados sensíveis</li>
                    <li>Controle de acesso restrito</li>
                    <li>Monitoramento contínuo de segurança</li>
                    <li>Backups seguros e regulares</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle>5. Seus Direitos (LGPD)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    De acordo com a LGPD, você tem direito a:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Confirmação da existência de tratamento de dados</li>
                    <li>Acesso aos dados pessoais</li>
                    <li>Correção de dados incompletos, inexatos ou desatualizados</li>
                    <li>Anonimização, bloqueio ou eliminação de dados</li>
                    <li>Portabilidade dos dados</li>
                    <li>Eliminação dos dados tratados com consentimento</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle>6. Cookies</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Utilizamos cookies para melhorar sua experiência de navegação. 
                    Você pode gerenciar as preferências de cookies nas configurações 
                    do seu navegador.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle>7. Contato</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Para exercer seus direitos ou esclarecer dúvidas sobre esta política, 
                    entre em contato conosco:
                  </p>
                  <div className="bg-muted/30 rounded-lg p-4 mt-4">
                    <p><strong>E-mail:</strong> privacidade@cervantes.com.br</p>
                    <p><strong>Telefone:</strong> (38) 3213-1234</p>
                    <p><strong>Endereço:</strong> Montes Claros - MG</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle>8. Alterações</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Esta política pode ser atualizada periodicamente. Alterações 
                    significativas serão comunicadas através de nossos canais oficiais.
                  </p>
                  <p className="text-sm">
                    <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
                  </p>
                </CardContent>
              </Card>
              
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}