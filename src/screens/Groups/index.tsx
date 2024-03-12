import { StyleSheet } from 'react-native';
import { Container, Title } from './styles';

export function Groups() {
  return (
    <Container>
      <Title>
        Olá Mundo
      </Title>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 22
  }
});
