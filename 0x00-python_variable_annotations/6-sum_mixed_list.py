#!/usr/bin/env python3
"""
type-annotated function
"""


def sum_mixed_list(mxd_lst: list[int | float]) -> float:
    """sums list values"""
    return sum(mxd_lst)
