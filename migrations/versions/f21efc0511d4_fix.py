"""fix

Revision ID: f21efc0511d4
Revises: 4776386cc9f2
Create Date: 2022-08-31 14:39:32.907774

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = 'f21efc0511d4'
down_revision = '4776386cc9f2'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('parties', sa.Column('partytimeend', sa.DateTime(), nullable=False))
    op.drop_column('parties', 'partytimened')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('parties', sa.Column('partytimened', postgresql.TIMESTAMP(), autoincrement=False, nullable=False))
    op.drop_column('parties', 'partytimeend')
    # ### end Alembic commands ###
