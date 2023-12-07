#!/usr/bin/env python3
"""
annotate code
"""
from typing import Iterable, Sequence


def element_length(lst: Iterable[Sequence]) -> list[tuple[Sequence, int]]:
    """get len of sequence in iterable"""
    return [(i, len(i)) for i in lst]
