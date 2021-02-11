import graphene
from graphene_django import DjangoObjectType
from assessment.jobs.models import Example as ExampleModel


class ExampleType(DjangoObjectType):
    class Meta:
        model = ExampleModel


class Example(graphene.Mutation):
    class Arguments:
        example_arg = graphene.String()

    example_arg = graphene.Field(ExampleType)

    def mutate(self, example_arg):
        pass


class Mutation(graphene.ObjectType):
    example_arg = Example.Field()
