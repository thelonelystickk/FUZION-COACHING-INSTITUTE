import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import Container from "../../components/common/Container";


export default function HomePage() {
  return (
    <Container>
      <section className="flex min-h-[80vh] items-center">
        <Card>
          <h1 className="text-5xl font-bold text-blue-600">
            FUZION COACHING INSTITUTE
          </h1>

          <p className="mt-6 text-slate-600">
            Premium Coaching Management System
          </p>

          <div className="mt-8">
            <Button>Admission Open</Button>
          </div>
        </Card>
      </section>
    </Container>
  );
}