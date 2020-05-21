import Container from "./../components/Layout/Container";
import Title from "./../components/Layout/Title";
import Synth from "./../components/Tone/Synth";

export default function Home() {
  return (
    <div>
      <Container>
        <Title>
          synthesizer_ js
        </Title>
        <Synth></Synth>
      </Container>
    </div>
  )
}
