import {describe, expect, it} from 'vitest';
import {act, renderHook} from '@testing-library/react';
import {useGameLogic} from './useGameLogic.ts';

describe('useGameLogic', () => {
    it('should add key to open cards on first click', () => {
        const { result} = renderHook(useGameLogic);
        act(() => result.current.handleClick('kiwi-0'));
        expect(result.current.openCards).toStrictEqual(['kiwi-0']);
    });

    it('should not add to opencards if card is clicked again', () => {
        const { result} = renderHook(useGameLogic);
        act(() => result.current.handleClick('kiwi-0'));
        act(() => result.current.handleClick('kiwi-0'));
        expect(result.current.openCards).toStrictEqual(['kiwi-0']);
    });

    it('should append to opencards not matching cards is clicked second', () => {
        const { result} = renderHook(useGameLogic);
        act(() => result.current.handleClick('kiwi-0'));
        act(() => result.current.handleClick('orange-1'));
        expect(result.current.openCards).toStrictEqual(['kiwi-0', 'orange-1']);
    });

    it('when there are already 2 cards in opencards, clicking third adds third and clears the others', () => {
        const { result} = renderHook(useGameLogic);
        act(() => result.current.handleClick('kiwi-0'));
        act(() => result.current.handleClick('orange-1'));
        act(() => result.current.handleClick('orange-2'));
        expect(result.current.openCards).toStrictEqual(['orange-2']);
    });

    it('when the second card is match to an already open card, opencards is cleared and matchedCards will have both', () => {
        const { result} = renderHook(useGameLogic);
        act(() => result.current.handleClick('kiwi-0'));
        act(() => result.current.handleClick('kiwi-1'));
        expect(result.current.openCards).toStrictEqual([]);
        expect(Array.from(result.current.matchedCards)).toStrictEqual(['kiwi-0', 'kiwi-1']);
    });
})
