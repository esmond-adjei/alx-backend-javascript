#!/usr/bin/env python3
"""
type-annotated function
"""


def to_kv(k: str, v: int | float) -> tuple[str, float]:
    """returns a tuple of (k, v^2)"""
    return (k, v**2)
