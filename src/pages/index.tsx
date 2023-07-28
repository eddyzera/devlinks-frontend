import { Card } from '@/components/Card'
import { Form } from '@/components/Form'

export default function Home() {
  return (
    <section className="h-screen w-full max-w-max-w-482 m-auto flex items-center justify-center">
      <Card.Root className="w-full">
        <Form.Root>
          <div className="mb-10">
            <h2 className="text-dark-gray text-text-32 font-bold leading-line-150">
              Login
            </h2>
            <p className="text-middle-gray">
              Add your details below to get back into the app
            </p>
          </div>
          <div>input</div>
        </Form.Root>
      </Card.Root>
    </section>
  )
}
