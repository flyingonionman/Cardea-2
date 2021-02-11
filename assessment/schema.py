import graphene

import assessment.jobs.schema
import assessment.jobs.mutations


class Query(
    assessment.jobs.schema.Query,
):
    pass


class Mutation(
    assessment.jobs.mutations.Mutation,
):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)


