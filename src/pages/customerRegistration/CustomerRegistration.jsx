import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import "./CustomerRegistration.scss"
import HeaderSidbar from "../../components/headerSidbar/HeaderSidbar"
import { loginUser } from "../home/components/mockData"
import { useState } from "react"

const CustomerRegistration = () => {
  const [isMarried, setIsMarried] = useState(false)
  const [hasGuarantor, setHasGuarantor] = useState(false)

  return (
    <div className="customer-registration">
      <HeaderSidbar isPage="customer-registration" userData={loginUser} />
      <div className="mx-auto max-w-3xl p-6 bg-white border rounded-md shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          Cadastro de Clientes
        </h1>
        <form>
          <div className="mb-6">
            <Label className="block mb-2 font-medium">Fotos do CPF</Label>
            <div className="flex gap-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="picture">Frente</Label>
                <Input id="Frente" type="file" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="picture">Verso</Label>
                <Input id="Verso" type="file" />
              </div>
            </div>
          </div>

          <div className="mb-6">
            <Label className="block mb-2 font-medium">Fotos do RG</Label>
            <div className="flex gap-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="picture">Frente</Label>
                <Input id="Frente" type="file" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="picture">Verso</Label>
                <Input id="Verso" type="file" />
              </div>
            </div>
          </div>

          {/* Estado civil */}
          <div className="mb-6">
            <Label className="block mb-2 font-medium">Casado(a)?</Label>
            <RadioGroup onChange={() => setIsMarried(!isMarried)}>
              <div className="flex gap-4">
                <Label>
                  <RadioGroupItem value={true} />
                  Sim
                </Label>
                <Label>
                  <RadioGroupItem value={false} />
                  Não
                </Label>
              </div>
            </RadioGroup>
          </div>

          {isMarried && (
            <>
              <div className="mb-6">
                <Label className="block mb-2 font-medium">
                  Fotos do CPF do cônjuge
                </Label>
                <div className="flex gap-4">
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="picture">Frente</Label>
                    <Input id="Frente" type="file" />
                  </div>
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="picture">Verso</Label>
                    <Input id="Verso" type="file" />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <Label className="block mb-2 font-medium">
                  Fotos do RG do cônjuge
                </Label>
                <div className="flex gap-4">
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="picture">Frente</Label>
                    <Input id="Frente" type="file" />
                  </div>
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="picture">Verso</Label>
                    <Input id="Verso" type="file" />
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="mb-6">
            <Label className="block mb-2 font-medium">
              Comprovante de renda
            </Label>
            <Input id="renda" type="file" />
          </div>

          <div className="mb-6">
            <Label className="block mb-2 font-medium">Avalista?</Label>
            <RadioGroup onChange={() => setHasGuarantor(!hasGuarantor)}>
              <div className="flex gap-4">
                <Label>
                  <RadioGroupItem value="yes" />
                  Sim
                </Label>
                <Label>
                  <RadioGroupItem value="no" />
                  Não
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-medium mb-4">Dados do Fiador</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Nome completo</Label>
                <Input />
              </div>
              <div>
                <Label>Rua</Label>
                <Input />
              </div>
              <div>
                <Label>Número</Label>
                <Input />
              </div>
              <div>
                <Label>Bairro</Label>
                <Input />
              </div>
              <div>
                <Label>Cidade</Label>
                <Input />
              </div>
              <div>
                <Label>Telefone</Label>
                <Input />
              </div>
              <div>
                <Label>Nº do CPF</Label>
                <Input />
              </div>
              <div>
                <Label>Nº do RG</Label>
                <Input />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Button type="submit">Continuar</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CustomerRegistration
