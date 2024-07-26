import { render, screen } from '@testing-library/react'
import Button from '../../../../components/UI/Button.jsx'
import {expect, test} from "vitest";

test('버튼이 생성 된다.', () => {
    render(<Button>test</Button>)
    const buttonElement = screen.getByText(/test/i)
    expect(buttonElement).toBeInTheDocument()
})