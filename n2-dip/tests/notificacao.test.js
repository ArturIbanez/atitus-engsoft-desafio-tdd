import { ServicoNotificacao } from '../src/servicoNotificacao.js';
import { jest } from '@jest/globals';

describe('ServicoNotificacao', () => {
  test('deve chamar o gateway de email com os dados corretos', async () => {
    const mockGateway = {
      enviar: jest.fn().mockResolvedValue(true)
    };

    const service = new ServicoNotificacao(mockGateway);
    await service.enviarBoasVindas({ email: 'aluno@atitus.edu.br' });

    expect(mockGateway.enviar).toHaveBeenCalledWith(
      'aluno@atitus.edu.br', 
      'Bem-vindo!'
    );

    expect(mockGateway.enviar).toHaveBeenCalledWith('aluno@atitus.edu.br', 'Bem-vindo!');
  });
});

