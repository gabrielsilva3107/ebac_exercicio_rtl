import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve adicionar o primeiro comentário para verificar funcionalidade do teste', () => {
        render(<PostComment />);
    fireEvent.change(screen.getByTestId('comment-textarea'), {
        target: { value: 'Comentário teste' },
    });

    fireEvent.click(screen.getByTestId('comment-button'));
    });

    it('Deve adicionar dois comentários', () => {
        render(<PostComment />);
    fireEvent.change(screen.getByTestId('comment-textarea'), {
        target: { value: 'Primeiro comentário' },
    });
    fireEvent.click(screen.getByTestId('comment-button'));

    fireEvent.change(screen.getByTestId('comment-textarea'), {
        target: { value: 'Segundo comentário' },
    });
    fireEvent.click(screen.getByTestId('comment-button'));

    expect(screen.getAllByTestId('comment-element')).toHaveLength(2);
    });
});